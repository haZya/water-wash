import { Close } from '@mui/icons-material';
import { lighten, Link, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { usePageBottom } from 'hooks';
import { sanitize } from 'lib/dompurify';
import { RootState } from 'lib/redux';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const ContactDial = () => {
  const {
    footerHeight,
    layoutContent: {
      contactDial: { icon, color, actions },
    },
  } = useSelector(({ shared }: RootState) => shared.layout);

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
          icon={<div dangerouslySetInnerHTML={{ __html: sanitize(icon) }} />}
          openIcon={<Close />}
        />
      }
      sx={{
        bottom: (theme) =>
          scrollFooter
            ? footerHeight - (ref.current?.clientHeight ?? 0)
            : theme.breakpoints.down('sm')
            ? 18
            : 44,
        transition: 'bottom .3s',
        '& .MuiButtonBase-root': {
          boxShadow:
            'inset 10px 10px 10px rgba(0, 0, 0, 0.05), 15px 25px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(255, 255, 255, 09)',
          bgcolor: (theme) => lighten(theme.palette[color][100], 0.8),
          '&:hover': {
            bgcolor: (theme) => lighten(theme.palette[color][100], 0.5),
          },
          '&.MuiFab-sizeLarge': {
            width: 60,
            height: 60,
          },
        },
      }}
    >
      {actions.map(({ icon, label, path }) => (
        <SpeedDialAction
          key={label}
          icon={
            <Link href={path}>
              <div
                className="flex-center w-5 h-5 text-primary-900"
                dangerouslySetInnerHTML={{ __html: sanitize(icon) }}
              />
            </Link>
          }
          tooltipOpen
          tooltipTitle={label}
          sx={{
            '& .MuiSpeedDialAction-staticTooltipLabel': {
              color: 'white',
              bgcolor: (theme) => theme.palette[color][900],
            },
          }}
        />
      ))}
    </SpeedDial>
  );
};

export default ContactDial;
