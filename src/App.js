import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Catalog from './components/Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Catalog />
      </div>
    );
  }
}

export default App;
