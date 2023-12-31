import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './common/components/Navbar';
import GlobalStyle from './common/styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
