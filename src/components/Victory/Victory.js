import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { startGame } from '../../actions/pageActions';
import './styles.css';

class Victory extends Component {
  state = { redirect: false };
  render() {
    const { seconds, moves, cards, startGame } = this.props;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Victory">
        <div>
          <div>Congratulations! </div>
          You win in {seconds} seconds and {moves} moves
        </div>
        <button
          className="Replay-button"
          onClick={() => {
            startGame(cards);
            this.setState({ redirect: true });
          }}
        >
          Play new game
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  seconds: store.seconds,
  moves: store.moves,
  cards: store.cards,
});

const mapDispatchToProps = dispatch => ({
  startGame: cards => dispatch(startGame(cards)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Victory);
