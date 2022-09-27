import { Button, ButtonProps } from '@mui/material';

interface IProps extends ButtonProps {
  ripple?: boolean;
  spring?: boolean;
}

const AnimatedButton = ({ ripple = true, spring = true, children, ...props }: IProps) => {
  return (
    <Button
      {...props}
      sx={{
        overflow: 'hidden',
        transition: 'scale 0.7s cubic-bezier(0.5, 2, 0.5, 0.5)',
        '&:hover': {
          scale: spring ? '1.1' : undefined,
        },
        ...(ripple && {
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '10%',
            opacity: 0,
            bgcolor: 'rgba(0,0,0,.05)',
            zIndex: 50,
            transition: 'opacity .05s, width .15s',
          },
          '&:hover::after': {
            opacity: 1,
            width: '100%',
          },
        }),
      }}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;
