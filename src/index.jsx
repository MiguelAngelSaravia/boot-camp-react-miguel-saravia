import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

import App from './components/App';
import './index.css';
const theme = unstable_createMuiStrictModeTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
