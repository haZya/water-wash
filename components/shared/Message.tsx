import { Close } from '@mui/icons-material';
import { Alert, Button, IconButton, Snackbar } from '@mui/material';
import { hideMessage } from 'components/shared/store/messageSlice';
import { RootState } from 'lib/redux';
import { useDispatch, useSelector } from 'react-redux';

const Message = () => {
  const dispatch = useDispatch();
  const { show, options } = useSelector(({ shared }: RootState) => shared.message);
  const { variant, message } = options;

  const handleClose = () => {
    dispatch(hideMessage());
  };

  return (
    <Snackbar {...options} open={show} onClose={handleClose}>
      <Alert
        severity={variant}
        onClose={handleClose}
        action={
          <>
            {options.actions?.map((a) => (
              <Button
                key={a.name}
                className="uppercase"
                color="secondary"
                size="small"
                onClick={() => {
                  a.onClick();
                  handleClose();
                }}
              >
                {a.name}
              </Button>
            ))}
            <IconButton aria-label="close" size="small" color="inherit" onClick={handleClose}>
              <Close fontSize="small" />
            </IconButton>
          </>
        }
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Message;
