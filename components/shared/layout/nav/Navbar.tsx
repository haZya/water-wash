import { FormatAlignLeft } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
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
      nav: { links, mobileLinks },
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
            <div className="w-full sm:w-32 flex sm:block justify-start sm:pl-0">
              <Link href="/" shallow scroll>
                <a>
                  <Image
                    {...logo}
                    className={clsx(
                      'select-none transition-all duration-300 drop-shadow-md h-auto',
                      navSticky ? 'w-20 min-w-20' : 'w-28 min-w-28'
                    )}
                    priority
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:flex items-center ml-auto gap-8 md:gap-12">
              {links.map((l) => (
                <NavLink key={l.url} {...l} />
              ))}
            </div>
            <Box
              className="flex sm:hidden items-center ml-auto"
              sx={(theme) => ({
                [theme.breakpoints.down(360)]: {
                  display: 'none !important',
                },
              })}
            >
              {mobileLinks.map((l) => (
                <div key={l.url} className="min-w-max">
                  <NavLink {...l} />
                </div>
              ))}
            </Box>
          </Toolbar>
        </div>
      </AppBar>
      {smDown && <DynamicNavDrawer />}
    </>
  );
};

export default Navbar;
