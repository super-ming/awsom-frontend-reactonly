import React, { Component } from 'react';

import Main from './Main';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
