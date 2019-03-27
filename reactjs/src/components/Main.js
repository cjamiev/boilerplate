import React from 'react';
import { hot } from 'react-hot-loader';

import Footer from './Footer';
import Navigation from './Navigation';
import Routes from './Routes';

const Main = React.memo(() => {
  return (
    <>
      <Navigation />
      <Routes />
      <Footer />
    </>
  );
});

export default hot(module)(Main);