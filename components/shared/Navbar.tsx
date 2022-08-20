import { FormatAlignLeft } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import clsx from 'clsx';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Image from './Image';
import styles from './Navbar.module.css';
import NavDrawer from './NavDrawer';
import { setLayout } from './store/layoutSlice';
// import NavDrawer, { DrawerNavItem } from './NavDrawer';
// import { setLayoutState } from './store/layoutSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const {
    logo,
    nav: { links },
  } = useSelector(({ shared }: RootState) => shared.layoutSlice.layout);
  const { navDrawerOpen } = useSelector(({ shared }: RootState) => shared.layoutSlice);

  const handleDrawerToggle = () => {
    dispatch(setLayout({ navDrawerOpen: !navDrawerOpen }));
  };

  return (
    <>
      <AppBar
        className={clsx('backdrop-blur-sm bg-white/70 shadow-sm fixed w-full z-50', styles.navbar)}
        component="nav"
        color="transparent"
        elevation={0}
      >
        <div className="container mx-auto">
          <Toolbar className="transition-all duration-500 mx-4 sm:mx-0" disableGutters>
            <IconButton
              className="block sm:hidden mr-4"
              color="primary"
              aria-label="open drawer"
              edge="start"
              size="large"
              onClick={handleDrawerToggle}
            >
              <FormatAlignLeft fontSize="large" />
            </IconButton>
            <div
              className={clsx('mr-12 w-full sm:w-32 flex sm:block justify-center sm:justify-start')}
            >
              <Link href="/">
                <a>
                  <Image src={logo} alt="Water Wash Logo" width={128} height={64} />
                </a>
              </Link>
            </div>
            <div className="hidden sm:flex items-center ml-auto space-x-8 md:space-x-12">
              {links.map(({ label, path, color }) => (
                <Link key={label} href={path}>
                  <a className="group relative">
                    <Typography className={`text-lg text-${color}-main`}>{label}</Typography>
                    <span
                      className={`absolute block h-0.5 w-0 group-hover:w-full bg-${color}-main transition-all duration-500`}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </Toolbar>
        </div>
      </AppBar>
      <NavDrawer />
    </>
  );
};

export default Navbar;
