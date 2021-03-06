import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import client from './client';
import SnackbarProvider from './components/snackbar/Snackbar';

ReactDOM.render(
  <ApolloProvider client={client}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
