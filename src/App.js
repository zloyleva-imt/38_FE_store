import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Catalog from './components/Catalog';
import Login from './components/Login';
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container">
                    <Route path="/" exact component={Catalog} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/cart" exact component={Cart} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
