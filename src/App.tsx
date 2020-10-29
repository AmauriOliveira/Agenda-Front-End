import React from 'react';

import Router from './router';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
