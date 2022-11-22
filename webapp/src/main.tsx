import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@pages/Home';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
);
