import { Box, Typography } from '@mui/material';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from '../Image';
import { setLayout } from '../store/layoutSlice';

const Footer = () => {
  const dispatch = useDispatch();
  const {
    logo,
    socials,
    navTop: { links: topLinks },
    nav: { links },
    footer: { copyrightText },
  } = useSelector(({ shared }: RootState) => shared.layout.layoutContent);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    dispatch(setLayout({ footerHeight: ref.current?.clientHeight }));
  }, [dispatch]);

  return (
    <footer ref={ref} className="bg-neutral-100">
      <div className="container mx-auto py-2 flex items-center h-24">
        <div className="flex items-center sm:justify-between gap-8 w-full overflow-auto">
          <Link href="/" shallow scroll>
            <a className="grow hidden sm:block">
              <Image
                {...logo}
                className="select-none w-24 h-auto my-2"
                priority
                placeholder="empty"
              />
            </a>
          </Link>
          <div className="grow flex-center gap-8 sm:gap-12 h-16">
            {[...links, ...topLinks].map(({ title, url }) => (
              <Link key={title} href={url}>
                <a>
                  <Typography
                    className="text-base font-medium whitespace-nowrap hover:text-gray-700"
                    color="text.secondary"
                  >
                    {title}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>
          <ul className="grow hidden sm:flex justify-end flex-nowrap gap-6">
            {socials.map(({ title, url, icon }, i) => (
              <li key={i} className="w-5">
                <Box
                  aria-label={title}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    '& img': {
                      filter:
                        'invert(46%) sepia(8%) saturate(626%) hue-rotate(182deg) brightness(94%) contrast(93%)',
                    },
                    '&:hover img': {
                      filter:
                        'invert(23%) sepia(17%) saturate(744%) hue-rotate(178deg) brightness(94%) contrast(89%)',
                    },
                  }}
                >
                  <Image {...icon} className="transition duration-300" placeholder="empty" />
                </Box>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-10 text-center bg-neutral-200 px-1">
        <Typography
          className="text-xs font-medium"
          component="p"
          dangerouslySetInnerHTML={{ __html: sanitize(copyrightText) }}
        />
      </div>
    </footer>
  );
};

export default Footer;
