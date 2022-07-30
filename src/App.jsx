import React from 'react';
import MainComponent from './components/MainComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
};

export default App;