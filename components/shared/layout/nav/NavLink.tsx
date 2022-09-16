import { Typography } from '@mui/material';
import clsx from 'clsx';
import { AnimatedButton } from 'components/shared';
import { NavLink } from 'models/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const NavLink = ({ label, path, color, type }: NavLink) => {
  const { pathname } = useRouter();
  const activePath = path === pathname;

  return (
    <Link href={path}>
      <a className={clsx('relative', styles.navLink)}>
        {type === 'text' ? (
          <Typography
            className={clsx(
              'relative text-lg font-medium',
              color === 'primary'
                ? 'text-primary-800 after:bg-primary-800 before:bg-primary-800'
                : color === 'secondary'
                ? 'text-secondary-900 after:bg-secondary-900 before:bg-secondary-900'
                : 'text-gray-500 after:bg-gray-500 before:bg-gray-500',
              styles.navLinkText,
              activePath && styles.navLinkActive
            )}
          >
            {label}
          </Typography>
        ) : (
          <AnimatedButton
            className={clsx(
              'min-w-min shadow-md hover:shadow-md border',
              color === 'primary'
                ? '!border-primary-700 shadow-primary-200 hover:shadow-primary-500'
                : color === 'secondary'
                ? '!border-secondary-700 shadow-secondary-200 hover:shadow-secondary-500'
                : '!border-gray-700 shadow-gray-200 hover:shadow-gray-500',
              color === 'primary'
                ? activePath
                  ? 'bg-primary-900 hover:bg-primary-900 text-white font-medium'
                  : 'bg-primary-100/50 hover:bg-primary-100 text-primary-900 font-semibold'
                : color === 'secondary'
                ? activePath
                  ? 'bg-secondary-900 hover:bg-secondary-900 text-white font-medium'
                  : 'bg-secondary-100/50 hover:bg-secondary-100 text-secondary-900 font-semibold'
                : activePath
                ? 'bg-gray-500 hover:bg-gray-500 text-white font-medium'
                : 'bg-gray-200 hover:bg-gray-200 text-gray-700 font-semibold'
            )}
            variant={activePath ? 'contained' : 'outlined'}
            color={color === 'text' ? 'inherit' : color}
            spring={false}
          >
            {label}
          </AnimatedButton>
        )}
      </a>
    </Link>
  );
};

export default NavLink;
