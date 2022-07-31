import React from 'react';
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
