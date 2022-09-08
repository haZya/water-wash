import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useSelector } from 'react-redux';
import { NavLink } from '.';

const NavbarTop = () => {
  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const {
    layoutContent: {
      navTop: { contacts, links },
      socials,
    },
  } = useSelector(({ shared }: RootState) => shared.layout);

  return (
    <>
      <AppBar
        className={clsx(
          'bg-transparent border-b relative w-full z-50 h-16 transition-all duration-500',
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
                    className="group border-gray-500 hover:border-primary-500 border-2 rounded-full transition-colors duration-500 cursor-pointer"
                  >
                    <a
                      className="flex-center text-lg w-8 h-8 text-gray-500 group-hover:text-primary-500 transition-colors duration-500"
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="grow flex md:justify-center space-x-6">
                {contacts.map((c) => (
                  <div key={c.title} className="flex items-center space-x-4">
                    <div
                      className="text-gray-500 scale-75 sm:scale-100"
                      dangerouslySetInnerHTML={{ __html: sanitize(c.icon) }}
                    />
                    <div>
                      <Typography className="text-xs sm:text-sm" color="text.secondary">
                        {c.title}
                      </Typography>
                      <div
                        className="text-gray-600 hover:text-primary-500 text-sm sm:text-base font-medium"
                        dangerouslySetInnerHTML={{ __html: sanitize(c.content) }}
                      />
                    </div>
                  </div>
                ))}
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
