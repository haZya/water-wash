import {
  Container,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Image from './Image';
import { setLayout } from './store/layoutSlice';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    [theme.breakpoints.between(drawerWidth, 'sm')]: {
      width: drawerWidth,
    },
  },
  '& .MuiBackdrop-root': { zIndex: 1200 },
}));

const NavDrawer = () => {
  const dispatch = useDispatch();
  const {
    logo,
    nav: { links },
  } = useSelector(({ shared }: RootState) => shared.layoutSlice.layout);
  const { navDrawerOpen } = useSelector(({ shared }: RootState) => shared.layoutSlice);

  const handleDrawerToggle = () => {
    dispatch(setLayout({ navDrawerOpen: !navDrawerOpen }));
  };

  return (
    <StyledDrawer
      id="nav-drawer"
      variant="temporary"
      open={navDrawerOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Container
        className="flex flex-col flex-1 text-center text-secondary-main bg-white-main"
        onClick={handleDrawerToggle}
      >
        <div className="m-2">
          <Link href="/">
            <a>
              <div className="w-36 mx-auto my-4">
                <Image src={logo} alt="Water Wash Logo" priority />
              </div>
            </a>
          </Link>
        </div>
        <Divider className="bg-primary-main" />
        <List className="flex-1 my-4">
          {links.map(({ label, path }) => (
            <Link key={label} href={path ?? ''} scroll={!!path}>
              <a>
                <ListItemButton className="text-center">
                  <ListItemText
                    primary={
                      <Typography className="text-base" color="text.primary">
                        {label}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </a>
            </Link>
          ))}
        </List>
      </Container>
      <div className="flex justify-center items-center w-full h-10 px-4 py-6 bg-neutral-200 border-t border-secondary-main">
        <Typography className="text-xs">
          Copyright © 2022{' '}
          <Link href="/">
            <a>Water Wash</a>
          </Link>
        </Typography>
      </div>
    </StyledDrawer>
  );
};

export default NavDrawer;
