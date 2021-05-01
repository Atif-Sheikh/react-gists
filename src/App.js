import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchScreen from './pages/searchScreen';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SearchScreen} />
    </BrowserRouter>
  );
}

export default App;
