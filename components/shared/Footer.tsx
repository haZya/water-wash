import { Typography } from '@mui/material';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from './Image';

const Footer = () => {
  const {
    logo,
    nav: { links },
    socials,
  } = useSelector(({ shared }: RootState) => shared.layoutSlice.layout);

  return (
    <footer className="bg-neutral-100">
      <div className="container mx-auto py-2 flex items-center min-h-20">
        <div className="flex items-center justify-center sm:justify-between w-full">
          <Link href="/">
            <a className="flex-1 hidden sm:block">
              <div className="w-24 my-2">
                <Image src={logo} alt="Water Wash Logo" priority />
              </div>
            </a>
          </Link>
          <div className="flex items-center space-x-8 sm:space-x-12 overflow-auto">
            {links.map(({ label, path }) => (
              <Link key={label} href={path}>
                <a>
                  <Typography
                    className="text-base font-medium whitespace-nowrap hover:text-gray-700"
                    color="text.secondary"
                  >
                    {label}
                  </Typography>
                </a>
              </Link>
            ))}
          </div>
          <ul className="hidden sm:flex flex-1 justify-end space-x-6">
            {socials.map(({ label, icon, url }, i) => (
              <li key={i}>
                <a
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                  href={url}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-10 bg-neutral-200 border-t border-secondary-main">
        <Typography className="text-xs font-medium">
          Copyright © 2022{' '}
          <Link href="/">
            <a>Water Wash</a>
          </Link>
          . All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
