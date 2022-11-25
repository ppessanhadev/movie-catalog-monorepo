import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from '@pages/Home';
import { GlobalStyles } from '@styles/global-styles';
import { MovieProvider } from '@contexts/MovieContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MovieProvider>
      <Home />
      <GlobalStyles />
    </MovieProvider>
  </React.StrictMode>,
);
