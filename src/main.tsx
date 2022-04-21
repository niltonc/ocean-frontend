import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './router';
import OceanTheme from './styles/theme/theme';

ReactDOM.render(
    <ThemeProvider theme={OceanTheme}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);