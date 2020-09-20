import React from 'react';

interface IShowSnackbarArgs {
  message: string;
  position?: {
    horizontal: 'left' | 'center' | 'right',
    vertical: 'top' | 'bottom'
  };
}

const SnackbarContext = React.createContext({
  showSnackbar: (_args: IShowSnackbarArgs) => {},
  closeSnackbar: (_event: object, _reason: string) => {},
});

export default SnackbarContext;
