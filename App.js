import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/index'
import Container from './src/Container';


function App () {
  let isAuth = false;

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default App