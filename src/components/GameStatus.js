const { h } = hyperapp;
import { countUpCells } from '../board-utils.js';

const GameStatus = ({ board, isBlackTurn, gameFinished, onclickRestart }) => {
  let gameStatus;
  if (gameFinished) {
    const { black, white } = countUpCells(board);
    const winner = black > white ? 'Black' : 'White';
    gameStatus = [
      h(
        'div',
        { class: 'message' },
        `${winner} won! (Black: ${black}, White: ${white})`
      ),
      h(
        'button',
        { class: 'restart-button', onclick: onclickRestart },
        'Restart game'
      ),
    ];
  } else {
    gameStatus = h(
      'div',
      { class: 'message' },
      `${isBlackTurn ? 'Black' : 'White'}'s turn`
    );
  }
  return h('div', { class: 'game-status' }, gameStatus);
};

export default GameStatus;
