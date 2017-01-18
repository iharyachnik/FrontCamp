import React, { Component } from 'react';
import './App.scss';

import Header from '../header/Header';
import Articles from '../articles/Articles';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
