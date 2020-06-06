import React from 'react';
import {StatusBar} from 'react-native';

import Main from './pages/main';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
    <Main />
  </>
);

export default App;
