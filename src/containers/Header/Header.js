import React, { Component } from 'react';

import Timer from '../../components/Timer/Timer';
import Moves from '../../components/Moves/Moves';
import Reset from '../../components/Reset/Reset';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    setInterval(() => this.clock(), 1000);
  }

  clock() {
    this.setState(state => {
      return { seconds: ++state.seconds };
    });
  }

  render() {
    return (
      <header>
        <div className="Greeting">Let's play memory game!</div>
        <div className="App-state">
          <Timer seconds={this.state.seconds} />
          <Moves />
          <Reset />
        </div>
      </header>
    );
  }
}

export default Header;
