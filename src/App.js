import React, { Component } from 'react';
import Header from './containers/Header/Header';
import Game from './containers/Game/Game';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Game />
      </React.Fragment>
    );
  }
}

export default App;
