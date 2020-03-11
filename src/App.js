import React from 'react';

import { Provider } from 'react-redux'
import store from './storage'

import Header from './components/Header'
import Home from './pages/Home'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
