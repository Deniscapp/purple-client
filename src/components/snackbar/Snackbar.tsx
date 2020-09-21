import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import SnackbarContext from './SnackbarContext';
export interface IShowSnackbarState {
  message: string | null;
  position?: {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'bottom';
  };
}

interface ISnackbarProvider {
  children: JSX.Element | JSX.Element[];
}

const initialState: IShowSnackbarState = {
  message: null,
  position: { horizontal: 'center', vertical: 'top' },
};

const SnackbarProvider = ({ children }: ISnackbarProvider): JSX.Element => {
  const [state, setState] = useState<IShowSnackbarState>(initialState);
  const [isOpen, setOpen] = useState(false);

  const showSnackbar = (args: IShowSnackbarState) => {
    setState({ ...state, ...args });
    setOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const onClose = (_event: object, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setState(initialState);
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        showSnackbar,
        closeSnackbar: onClose,
      }}
    >
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={state.position}
        open={isOpen}
        onClose={onClose}
        key={state.message}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={(e) => onClose(e, 'close')}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        {...state}
      />
      {children}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
