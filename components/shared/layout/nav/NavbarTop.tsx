import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { NavLink } from '.';

const NavbarTop = () => {
  const {
    hasBanner,
    layoutContent: {
      navTop: { phone, email, links },
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
          'hidden xs:block bg-transparent border-b relative w-full z-50 h-16 transition-all duration-500',
          navSticky && '-translate-y-16 opacity-0 invisible'
        )}
        component="nav"
        color="transparent"
        elevation={0}
      >
        <div className="container mx-auto">
          <Toolbar
            className={clsx('transition-all duration-500 mx-4 sm:mx-0 overflow-auto')}
            disableGutters
          >
            <div className="flex md:space-x-12 w-full h-full">
              <ul className="hidden md:flex items-center flex-nowrap gap-4 self-center mx-auto">
                {socials?.map((s) => (
                  <li
                    key={s.url}
                    className={clsx(
                      'group hover:border-primary-300 border-2 rounded-full transition-colors duration-500 cursor-pointer',
                      hasBanner ? 'border-white' : 'border-gray-500'
                    )}
                  >
                    <a
                      aria-label={s.label}
                      className={clsx(
                        'flex-center text-lg group-hover:text-primary-300 transition-colors duration-500 w-8 h-8 p-2',
                        hasBanner ? 'text-white' : 'text-gray-500'
                      )}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      dangerouslySetInnerHTML={{ __html: sanitize(s.icon) }}
                    />
                  </li>
                ))}
              </ul>
              <div className="grow flex md:justify-center space-x-6">
                <a className="group relative flex items-center space-x-4" href="tel:03 8539 4855">
                  <div
                    className={clsx(
                      'group-hover:text-primary-300 transition-colors duration-500 w-9',
                      hasBanner ? 'text-white' : 'text-gray-500'
                    )}
                    dangerouslySetInnerHTML={{ __html: sanitize(phone.icon) }}
                  />
                  <div>
                    <Typography
                      className={clsx(
                        'text-xs sm:text-sm',
                        hasBanner ? 'text-white/80' : 'text-gray-500'
                      )}
                    >
                      {phone.title}
                    </Typography>
                    <Typography
                      className={clsx(
                        'whitespace-nowrap group-hover:text-primary-300 transition-colors duration-500 text-base font-medium',
                        hasBanner ? 'text-white' : 'text-gray-600'
                      )}
                    >
                      {phone.content}
                    </Typography>
                  </div>
                </a>
                <a
                  className="group relative flex items-center space-x-4"
                  href="mailto:enquiries@waterwash.com.au"
                >
                  <div
                    className={clsx(
                      'group-hover:text-primary-300 transition-colors duration-500 w-9',
                      hasBanner ? 'text-white' : 'text-gray-500'
                    )}
                    dangerouslySetInnerHTML={{ __html: sanitize(email.icon) }}
                  />
                  <div>
                    <Typography
                      className={clsx(
                        'text-xs sm:text-sm',
                        hasBanner ? 'text-white/80' : 'text-gray-500'
                      )}
                    >
                      {email.title}
                    </Typography>
                    <Typography
                      className={clsx(
                        'group-hover:text-primary-300 transition-colors duration-500 text-base font-medium',
                        hasBanner ? 'text-white' : 'text-gray-600'
                      )}
                    >
                      {email.content}
                    </Typography>
                  </div>
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-8 md:gap-12">
                {links.map((l) => (
                  <NavLink key={l.path} {...l} />
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
