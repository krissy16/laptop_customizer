import React, { Component } from 'react';
import './App.css';

import FEATURES from './features';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main features={FEATURES}/>
      </div>
    );
  }
}

export default App;
