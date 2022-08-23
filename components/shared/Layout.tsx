import logo from '@/assets/logos/logo.svg';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { RootState } from 'lib/redux';
import { NavLink, Social } from 'models/shared';
import dynamic from 'next/dynamic';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
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

const socials: Social[] = [
  {
    label: 'Instagram',
    icon: <Instagram fontSize="large" />,
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '#',
  },
  {
    label: 'Facebook',
    icon: <Facebook fontSize="large" />,
    url: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '#',
  },
  {
    label: 'Twitter',
    icon: <Twitter fontSize="large" />,
    url: process.env.NEXT_PUBLIC_TWITTER_URL ?? '#',
  },
];

const DynamicMessage = dynamic(() => import('./Message'));

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  const dispatch = useDispatch();
  const { show } = useSelector(({ shared }: RootState) => shared.message);

  useEffect(() => {
    dispatch(setLayout({ layoutContent: { logo, nav: { links: navLinks }, socials } }));
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {show && <DynamicMessage />}
    </>
  );
};

export default Layout;
