/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

interface IShowSnackbarArgs {
  message: string;
  position?: {
    horizontal: 'left' | 'center' | 'right';
    vertical: 'top' | 'bottom';
  };
}

const SnackbarContext = React.createContext({
  showSnackbar: (_: IShowSnackbarArgs) => {},
  closeSnackbar: (_: Record<string, unknown>, _reason: string) => {},
});

export default SnackbarContext;
