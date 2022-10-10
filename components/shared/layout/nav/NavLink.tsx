import { Typography, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { AnimatedButton } from 'components/shared';
import { RootState } from 'lib/redux';
import { NavLink } from 'models/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';

const NavLink = ({ title, url, color, type }: NavLink) => {
  const { hasBanner } = useSelector(({ shared }: RootState) => shared.layout);
  const navSticky = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const { pathname } = useRouter();
  const activePath = url === pathname;

  return (
    <Link href={url}>
      <a className={clsx('relative', styles.navLink)}>
        {type === 'text' ? (
          <Typography
            className={clsx(
              'relative text-lg font-medium',
              color === 'primary'
                ? hasBanner && !navSticky
                  ? 'text-primary-400 after:bg-primary-400 before:bg-primary-400'
                  : 'text-primary-800 after:bg-primary-800 before:bg-primary-800'
                : color === 'secondary'
                ? hasBanner && !navSticky
                  ? 'text-secondary-500 after:bg-secondary-500 before:bg-secondary-500'
                  : 'text-secondary-900 after:bg-secondary-900 before:bg-secondary-900'
                : hasBanner && !navSticky
                ? 'text-gray-300 after:bg-gray-300 before:bg-gray-300'
                : 'text-gray-500 after:bg-gray-500 before:bg-gray-500',
              styles.navLinkText,
              activePath && styles.navLinkActive
            )}
          >
            {title}
          </Typography>
        ) : (
          <AnimatedButton
            className={clsx(
              'min-w-min shadow-md hover:shadow-md border transition duration-700',
              color === 'primary'
                ? hasBanner && !navSticky
                  ? 'text-primary-200 hover:text-primary-900 !border-primary-200 shadow-primary-200 hover:shadow-primary-500'
                  : 'text-primary-900 !border-primary-700 shadow-primary-200 hover:shadow-primary-500'
                : color === 'secondary'
                ? hasBanner && !navSticky
                  ? 'text-secondary-200 hover:text-secondary-900 !border-secondary-200 shadow-secondary-200 hover:shadow-secondary-500'
                  : 'text-secondary-900 !border-secondary-700 shadow-secondary-200 hover:shadow-secondary-500'
                : '!border-gray-700 shadow-gray-200 hover:shadow-gray-500',
              color === 'primary'
                ? activePath
                  ? 'bg-primary-900 hover:bg-primary-900 !text-white font-medium'
                  : 'bg-primary-100/50 hover:bg-primary-100 font-semibold'
                : color === 'secondary'
                ? activePath
                  ? 'bg-secondary-900 hover:bg-secondary-900 !text-white font-medium'
                  : 'bg-secondary-100/50 hover:bg-secondary-100 font-semibold'
                : activePath
                ? 'bg-gray-500 hover:bg-gray-500 text-white font-medium'
                : 'bg-gray-200 hover:bg-gray-200 text-gray-700 font-semibold'
            )}
            variant={activePath ? 'contained' : 'outlined'}
            color={color === 'text' ? 'inherit' : color}
            spring={false}
          >
            {title}
          </AnimatedButton>
        )}
      </a>
    </Link>
  );
};

export default NavLink;
