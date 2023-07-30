import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './common/components/Navbar';
import GlobalStyle from './common/components/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
