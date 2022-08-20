import logo from '@/assets/logos/logo.svg';
import { NavLink } from 'models/shared';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { setLayout } from './store/layoutSlice';

// TODO: Fetch from CMS
const navLinks: NavLink[] = [
  {
    label: 'Residential',
    path: '/residential',
    color: 'primary',
  },
  {
    label: 'Commercial',
    path: '/commercial',
    color: 'primary',
  },
  {
    label: 'About Us',
    path: '/about-us',
    color: 'secondary',
  },
];

const DynamicMessage = dynamic(() => import('./Message'));

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLayout({ layout: { logo, nav: { links: navLinks } } }));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
      <DynamicMessage />
    </>
  );
};

export default Layout;
