import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { NavLink } from 'models/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const NavLink = ({ label, path, color, type }: NavLink) => {
  const { pathname } = useRouter();
  const activePath = path === pathname;

  return (
    <>
      {type === 'text' ? (
        <Link href={path}>
          <a className={clsx('relative', styles.navLink)}>
            <Typography
              className={clsx(
                'relative text-lg font-medium',
                color === 'primary'
                  ? 'text-primary-700 after:bg-primary-700 before:bg-primary-700'
                  : color === 'secondary'
                  ? 'text-secondary-700 after:bg-secondary-700 before:bg-secondary-700'
                  : 'text-gray-500 after:bg-gray-500 before:bg-gray-500',
                styles.navLinkText,
                activePath && styles.navLinkActive
              )}
            >
              {label}
            </Typography>
          </a>
        </Link>
      ) : (
        <Button
          className={clsx(
            'min-w-min shadow-md hover:shadow-md text-white transition duration-500',
            color === 'primary'
              ? 'bg-primary-400 hover:bg-primary-500 shadow-primary-100/70 hover:shadow-primary-200/70'
              : color === 'secondary'
              ? 'bg-secondary-400 hover:bg-secondary-500 shadow-secondary-100 hover:shadow-secondary-200'
              : 'bg-gray-500 hover:bg-gray-700 shadow-gray-300 hover:shadow-gray-400'
          )}
          variant={activePath ? 'contained' : 'contained'}
        >
          <Link href={path}>
            <a className={clsx('relative', styles.navLink)}>{label}</a>
          </Link>
        </Button>
      )}
    </>
  );
};

export default NavLink;
