import { h } from 'hyperapp';
import { countUpCells } from '../board-utils';

const GameStatus = ({ board, isBlackTurn, gameFinished, onclickRestart }) => {
  let gameStatus;
  if (gameFinished) {
    const { black, white } = countUpCells(board);
    const draw = black === white;
    let message;
    if (draw) {
      message = 'Draw';
    } else {
      message = `${black > white ? 'Black' : 'White'} won!`;
    }
    gameStatus = [
      h(
        'div',
        { class: 'message' },
        `${message} (Black: ${black}, White: ${white})`
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
