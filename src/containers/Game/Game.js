import React, { Component } from 'react';
import { cards } from '../../cards';
import './styles.css';

class Game extends Component {
  render() {
    let doubledCards = cards.concat(cards);

    let mixedCards = doubledCards.sort(function() {
      return Math.random() - 0.5;
    });

    let items = mixedCards.map((item, index) => {
      const { color } = item;
      console.log(item);
      return (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front">{color}</div>
            <div className="flip-card-back" style={{ backgroundColor: color }}>
              Back side
            </div>
          </div>
        </div>
      );
    });

    return <main>{items}</main>;
  }
}

export default Game;
