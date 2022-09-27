import clsx from 'clsx';
import { getLayout } from 'graphql/queries/layout';
import { RootState } from 'lib/redux';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactDial, Footer } from '.';
import { setLayout } from '../store/layoutSlice';
import { Navbar, NavbarTop } from './nav';

const DynamicPopup = dynamic(() => import('../popup/Popup'));
const DynamicMessage = dynamic(() => import('./Message'));

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const { route } = useRouter();
  const {
    layout: { hasBanner },
    message: { show },
  } = useSelector(({ shared }: RootState) => shared);

  useEffect(() => {
    (async () => {
      const data = await getLayout();
      dispatch(
        setLayout({
          layoutContent: {
            ...data,
          },
        })
      );
    })();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(setLayout({ hasBanner: false }));
    };
  }, [dispatch, route]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="absolute top-0 left-0 right-0">
        <NavbarTop />
        <Navbar />
      </div>
      <main className={clsx(!hasBanner && 'mt-0')}>{children}</main>
      <Footer />
      <ContactDial />
      <DynamicPopup />
      {show && <DynamicMessage />}
    </>
  );
};

export default Layout;
