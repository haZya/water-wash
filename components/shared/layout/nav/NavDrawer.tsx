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
import Image from 'components/shared/Image';
import { setLayout } from 'components/shared/store/layoutSlice';
import { RootState } from 'lib/redux';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

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
    navDrawerOpen,
    layoutContent: {
      logo,
      navTop: { links: topLinks },
      nav: { links },
    },
  } = useSelector(({ shared }: RootState) => shared.layout);

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
        className="flex flex-col flex-1 text-center text-secondary-500 bg-white-500"
        onClick={handleDrawerToggle}
      >
        <div className="m-2">
          <Link href="/" shallow scroll>
            <a>
              <Image
                {...logo}
                className="select-none w-36 h-auto mx-auto my-4 drop-shadow-md"
                priority
              />
            </a>
          </Link>
        </div>
        <Divider className="bg-primary-500" />
        <List className="flex-1 my-4">
          {[...links, ...topLinks].map(({ title, url }) => (
            <Link key={title} href={url}>
              <a>
                <ListItemButton className="text-center">
                  <ListItemText
                    primary={
                      <Typography className="text-base" color="text.primary">
                        {title}
                      </Typography>
                    }
                  />
                </ListItemButton>
              </a>
            </Link>
          ))}
        </List>
      </Container>
      <div className="flex justify-center items-center w-full h-10 px-4 py-6 bg-neutral-200 border-t border-secondary-500">
        <Typography className="text-xs">
          Copyright © 2022{' '}
          <Link href="/" shallow>
            <a>Water Wash</a>
          </Link>
        </Typography>
      </div>
    </StyledDrawer>
  );
};

export default NavDrawer;
