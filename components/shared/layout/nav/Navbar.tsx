import { FormatAlignLeft } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import Image from 'components/shared/Image';
import { setLayout } from 'components/shared/store/layoutSlice';
import { RootState } from 'lib/redux';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from '.';
import styles from './Navbar.module.css';

const DynamicNavDrawer = dynamic(() => import('./NavDrawer'));

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {
    navDrawerOpen,
    layoutContent: {
      logo,
      nav: { links },
    },
  } = useSelector(({ shared }: RootState) => shared.layout);

  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    dispatch(setLayout({ navDrawerOpen: !navDrawerOpen }));
  };

  return (
    <>
      <AppBar
        className={clsx(
          'bg-transparent w-full z-50 transition-colors duration-300',
          navSticky && 'backdrop-blur-sm !bg-white/70 shadow-sm border-b border-white/50',
          navSticky ? styles.navSticky : 'relative',
          styles.navbar
        )}
        component="nav"
        color="transparent"
        elevation={0}
      >
        <div className="container mx-auto">
          <Toolbar
            className={clsx('transition-all duration-300 mx-4 sm:mx-0', navSticky ? 'm-0' : 'my-3')}
            disableGutters
          >
            <IconButton
              className="block sm:hidden mr-4 drop-shadow-md"
              color="primary"
              aria-label="open drawer"
              edge="start"
              size="medium"
              onClick={handleDrawerToggle}
            >
              <FormatAlignLeft fontSize="medium" />
            </IconButton>
            <div className="mr-12 w-full sm:w-32 flex sm:block justify-center sm:justify-start">
              <Link href="/" shallow>
                <a>
                  <div
                    className={clsx(
                      'select-none transition-all duration-300 drop-shadow-md',
                      navSticky ? 'w-20' : 'w-24 sm:w-28'
                    )}
                  >
                    <Image src={logo} alt="Water Wash Logo" priority />
                  </div>
                </a>
              </Link>
            </div>
            <div className="hidden sm:flex items-center ml-auto gap-8 md:gap-12">
              {links.map((l) => (
                <NavLink key={l.path} {...l} />
              ))}
            </div>
          </Toolbar>
        </div>
      </AppBar>
      {smDown && <DynamicNavDrawer />}
    </>
  );
};

export default Navbar;
