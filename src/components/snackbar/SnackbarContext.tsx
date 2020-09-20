import React from 'react';

interface IShowSnackbarArgs {
  message: string;
  position?: {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'bottom';
  };
}

const SnackbarContext = React.createContext({
  showSnackbar: (_args: IShowSnackbarArgs) => null,
  closeSnackbar: (_event: Record<string, unknown>, _reason: string) => null,
});

export default SnackbarContext;
