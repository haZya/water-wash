import { Typography } from '@mui/material';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from '../Image';

const Footer = () => {
  const {
    logo,
    navTop: { links: topLinks },
    nav: { links },
    socials,
  } = useSelector(({ shared }: RootState) => shared.layout.layoutContent);

  return (
    <footer className="bg-neutral-100">
      <div className="container mx-auto py-2 flex items-center min-h-20">
        <div className="flex items-center sm:justify-between gap-8 w-full overflow-auto">
          <Link href="/" shallow>
            <a className="grow hidden sm:block">
              <div className="select-none w-24 my-2">
                <Image src={logo} alt="Water Wash Logo" priority />
              </div>
            </a>
          </Link>
          <div className="grow flex-center gap-8 sm:gap-12 h-16">
            {[...links, ...topLinks].map(({ label, path }) => (
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
          <ul className="grow hidden sm:flex justify-end flex-nowrap gap-6">
            {socials.map(({ label, icon, url }, i) => (
              <li key={i}>
                <a
                  className="text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-300"
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
      <div className="flex justify-center items-center w-full h-10 text-center bg-neutral-200">
        <Typography className="text-xs font-medium">
          Copyright © 2022{' '}
          <Link href="/" shallow>
            <a>Water Wash</a>
          </Link>
          . All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
