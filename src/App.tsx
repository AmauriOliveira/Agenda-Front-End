import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';
import GlobalStyle from './styles/global';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
