import { Close } from '@mui/icons-material';
import {
  Box,
  lighten,
  Link,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { usePageBottom } from 'hooks';
import { RootState } from 'lib/redux';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';

const ContactDial = () => {
  const {
    footerHeight,
    layoutContent: {
      contactDial: { icon, color, actions },
    },
  } = useSelector(({ shared }: RootState) => shared.layout);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollFooter = usePageBottom(1);
  const ref = useRef<HTMLElement>(null);

  return (
    <SpeedDial
      ariaLabel="Contact Actions"
      className="fixed right-4 sm:right-8"
      icon={
        <SpeedDialIcon
          ref={ref}
          className="flex-center text-primary-900"
          icon={
            <Box
              sx={{
                '& img': {
                  filter:
                    'invert(23%) sepia(64%) saturate(1564%) hue-rotate(174deg) brightness(94%) contrast(106%)',
                },
              }}
            >
              <Image className="p-2" {...icon} />
            </Box>
          }
          openIcon={<Close />}
        />
      }
      sx={{
        bottom: scrollFooter ? footerHeight - (ref.current?.clientHeight ?? 0) : smDown ? 18 : 44,
        transition: 'bottom .3s',
        '& .MuiButtonBase-root': {
          boxShadow:
            'inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(255, 255, 255, 09)',
          bgcolor: lighten(theme.palette[color][100], 0.8),
          '&:hover': {
            bgcolor: lighten(theme.palette[color][100], 0.5),
          },
          '&.MuiFab-sizeLarge': {
            width: 60,
            height: 60,
          },
        },
      }}
    >
      {actions.map(({ title, url, icon }) => (
        <SpeedDialAction
          key={title}
          icon={
            <Box
              component={Link}
              href={url}
              sx={{
                '& img': {
                  filter:
                    'invert(23%) sepia(64%) saturate(1564%) hue-rotate(174deg) brightness(94%) contrast(106%)',
                },
              }}
            >
              <Image {...icon} className="flex-center w-5 h-5 fill-primary-900" />
            </Box>
          }
          tooltipOpen
          tooltipTitle={title}
          sx={{
            '& .MuiSpeedDialAction-staticTooltipLabel': {
              color: 'white',
              bgcolor: theme.palette[color][900],
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default ContactDial;
