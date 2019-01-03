import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { startGame, movesAction, selectItem } from '../../actions/pageActions';
import { connect } from 'react-redux';

import './styles.css';

class Game extends Component {
  componentWillMount() {
    this.props.startGame(this.props.cards);
  }
  handleClick = e => {
    this.props.selectItem(
      parseInt(e.currentTarget.getAttribute('item-id')),
      e.currentTarget.getAttribute('item-color')
    );
  };

  render() {
    let { cards, showed, checked, matched } = this.props;
    let className = 'flip-card-inner';

    if (showed.length === 16) {
      return <Redirect to="/victory" />;
    }

    let items = cards.map(item => {
      const { color, id } = item;

      if (showed.includes(id) || checked.includes(id) || matched.includes(id)) {
        className += ' innercardshow';
      } else className = 'flip-card-inner';

      return (
        <div className="flip-card" key={id}>
          <div
            className={className}
            onClickCapture={this.handleClick}
            item-id={id}
            item-color={color}
          >
            <div className="flip-card-front" />
            <div className="flip-card-back" style={{ backgroundColor: color }} />
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
  matched: store.matched,
  showed: store.showed,
  checked: store.checked,
});

const mapDispatchToProps = dispatch => ({
  movesAction: moves => dispatch(movesAction(moves)),
  startGame: cards => dispatch(startGame(cards)),
  selectItem: (id, color) => dispatch(selectItem(id, color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
