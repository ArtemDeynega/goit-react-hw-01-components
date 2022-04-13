import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App/App';
import { theme } from 'theme/theme';
import { ThemeProvider } from '@emotion/react';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
