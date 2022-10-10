import { AppBar, Box, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { Image } from 'components/shared';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { NavLink } from '.';

const NavbarTop = () => {
  const {
    hasBanner,
    layoutContent: {
      navTop: { contactMethods, links },
      socials,
    },
  } = useSelector(({ shared }: RootState) => shared.layout);

  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar
        className={clsx(
          'block bg-transparent border-b relative w-full z-50 h-16 transition-all duration-500',
          navSticky && '-translate-y-16 opacity-0 invisible'
        )}
        component="nav"
        color="transparent"
        elevation={0}
      >
        <div className="container mx-auto h-full">
          <Toolbar
            className="transition-all duration-500 mx-4 sm:mx-0 h-full overflow-auto"
            disableGutters
          >
            <div className="flex space-x-4 md:space-x-12 w-full h-full">
              <ul className="flex xs:hidden md:flex items-center flex-nowrap gap-2 xs:gap-4 self-center mx-auto">
                {socials?.map((s) => (
                  <li
                    key={s.url}
                    className={clsx(
                      'group hover:border-primary-300 border-2 rounded-full transition-colors duration-500 cursor-pointer',
                      hasBanner ? 'border-white' : 'border-gray-500'
                    )}
                  >
                    <Box
                      aria-label={s.title}
                      component="a"
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      sx={{
                        '& img': {
                          filter: hasBanner
                            ? 'invert(97%) sepia(68%) saturate(17%) hue-rotate(106deg) brightness(104%) contrast(100%)'
                            : 'invert(41%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(96%) contrast(91%)',
                        },
                        '.group:hover & img': {
                          filter:
                            'invert(75%) sepia(9%) saturate(2901%) hue-rotate(161deg) brightness(91%) contrast(97%)',
                        },
                      }}
                    >
                      <Image
                        {...s.icon}
                        className="flex-center transition duration-300 min-w-8 min-h-8 w-8 h-8 p-2"
                        placeholder="empty"
                      />
                    </Box>
                  </li>
                ))}
              </ul>
              <div className="grow flex justify-end xs:justify-start md:justify-center space-x-4 xs:space-x-6">
                {contactMethods.map((m) => (
                  <Box
                    key={m.content}
                    className="group relative flex items-center xs:space-x-4"
                    component="a"
                    href={m.url}
                    sx={{
                      '& img': {
                        filter: hasBanner
                          ? 'invert(97%) sepia(68%) saturate(17%) hue-rotate(106deg) brightness(104%) contrast(100%)'
                          : 'invert(41%) sepia(0%) saturate(0%) hue-rotate(282deg) brightness(96%) contrast(91%)',
                      },
                      '&:hover img': {
                        filter:
                          'invert(75%) sepia(9%) saturate(2901%) hue-rotate(161deg) brightness(91%) contrast(97%)',
                      },
                    }}
                  >
                    <Image
                      {...m.icon}
                      className="block transition duration-300 min-w-7 w-7 xs:min-w-9 xs:w-9"
                      placeholder="empty"
                    />
                    <div className="hidden xs:block">
                      <Typography
                        className={clsx(
                          'text-xs sm:text-sm',
                          hasBanner ? 'text-white/80' : 'text-gray-500'
                        )}
                      >
                        {m.title}
                      </Typography>
                      <Typography
                        className={clsx(
                          'whitespace-nowrap group-hover:text-primary-300 transition-colors duration-300 font-medium',
                          hasBanner ? 'text-white' : 'text-gray-600'
                        )}
                        sx={(theme) => ({
                          [theme.breakpoints.down('xs')]: {
                            fontSize: '1.5rem',
                          },
                          fontSize: '1.6rem',
                        })}
                      >
                        {m.content}
                      </Typography>
                    </div>
                  </Box>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-8 md:gap-12">
                {links.map((l) => (
                  <NavLink key={l.url} {...l} />
                ))}
              </div>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
};

export default NavbarTop;
