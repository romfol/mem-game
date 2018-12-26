import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timerAction, startGame } from '../../actions/pageActions';
import { Timer, Moves, Reset } from '../../components';

import './styles.css';

class Header extends Component {
  componentDidMount() {
    setInterval(() => this.props.timerAction(this.props.seconds), 1000);
  }

  render() {
    const { seconds, moves, cards, startGame } = this.props;

    return (
      <header>
        <div className="Greeting">Let's train memory!</div>
        <div className="App-state">
          <Timer seconds={seconds} />
          <Moves moves={moves} />
          <Reset startGame={startGame} cards={cards} />
        </div>
      </header>
    );
  }
}

const mapStateToProps = store => ({
  seconds: store.seconds,
  moves: store.moves,
  cards: store.cards,
});

const mapDispatchToProps = dispatch => ({
  timerAction: seconds => dispatch(timerAction(seconds)),
  startGame: cards => dispatch(startGame(cards)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
