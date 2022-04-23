import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';
import App from './router';
import GlobalStyle from './styles';
import OceanTheme from './styles/theme/theme';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={OceanTheme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
