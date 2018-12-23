import React, { Component } from 'react';
import { startGame, movesAction, selectItem } from '../../actions/pageActions';
import { connect } from 'react-redux';

import './styles.css';

class Game extends Component {
  componentWillMount() {
    this.props.startGame(this.props.cards);
  }
  handleClick = e => {
    this.props.movesAction(this.props.moves);
    this.props.selectItem(e.target.getAttribute('item-color'));
  };

  render() {
    console.log('render game');
    let items = this.props.cards.map(item => {
      const { color, id } = item;
      return (
        <div className="flip-card" key={id}>
          <div className="flip-card-inner">
            <div className="flip-card-front" />
            <div
              className="flip-card-back"
              style={{ backgroundColor: color }}
              onClick={this.handleClick}
              item-color={color}
            />
          </div>
        </div>
      );
    });

    return <main>{items}</main>;
  }
}

const mapStateToProps = store => ({
  moves: store.moves,
  cards: store.cards,
  cardsToggle: store.cardsToggle,
});

const mapDispatchToProps = dispatch => ({
  movesAction: moves => dispatch(movesAction(moves)),
  startGame: cards => dispatch(startGame(cards)),
  selectItem: item => dispatch(selectItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
