const { h, app } = hyperapp;
const { range, cloneDeep, flatten } = _;
import { ROW_NUMBERS, COLUMN_NUMBERS, STATUSES } from './constants.js';
import Cell from './components/Cell.js';

const initializeBoard = (rowNumbers, columnNumbers) => {
  const board = range(ROW_NUMBERS).map((_n, y) =>
    range(COLUMN_NUMBERS).map((_n, x) => ({
      status: STATUSES.EMPTY,
      position: { x, y },
      selectable: true,
    }))
  );
  board[rowNumbers / 2][columnNumbers / 2 - 1].status = STATUSES.BLACK;
  board[rowNumbers / 2 - 1][columnNumbers / 2].status = STATUSES.BLACK;
  board[rowNumbers / 2][columnNumbers / 2].status = STATUSES.WHITE;
  board[rowNumbers / 2 - 1][columnNumbers / 2 - 1].status = STATUSES.WHITE;
  return board;
};

const board = initializeBoard(ROW_NUMBERS, COLUMN_NUMBERS);

const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UPPER_RIGHT: 'UPPER_RIGHT',
  UPPER_LEFT: 'UPPER_LEFT',
  LOWER_RIGHT: 'LOWER_RIGHT',
  LOWER_LEFT: 'LOWER_RIGHT',
};

const DIRECTIONS_DELTA = {
  [DIRECTIONS.UP]: { x: 0, y: -1 },
  [DIRECTIONS.DOWN]: { x: 0, y: 1 },
  [DIRECTIONS.LEFT]: { x: -1, y: 0 },
  [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
  [DIRECTIONS.UPPER_LEFT]: { x: -1, y: -1 },
  [DIRECTIONS.UPPER_RIGHT]: { x: 1, y: -1 },
  [DIRECTIONS.LOWER_LEFT]: { x: -1, y: 1 },
  [DIRECTIONS.LOWER_RIGHT]: { x: 1, y: 1 },
};

const getCells = board => flatten(board);

const findCell = ({ board, position: { x, y } }) =>
  getCells(board).find(
    ({ position: { x: _x, y: _y } }) => x === _x && y === _y
  );

const checkSelectable = ({ position, board, isBlackTurn }) => {
  const { x, y } = position;
  const cell = findCell({ board, position });

  if (currentStatus !== STATUSES.EMPTY) {
    return false;
  }
  const targetStatus = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
};

const state = {
  isBlackTurn: true,
  board,
};

const actions = {
  select: ({ position }) => ({ board, isBlackTurn }) => {
    const newBoard = cloneDeep(board);
    const selectedCell = findCell({ board: newBoard, position });
    selectedCell.status = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
    return {
      board: newBoard,
      isBlackTurn: !isBlackTurn,
    };
  },
};

const view = (state, actions) =>
  h('div', {}, [
    h(
      'div',
      { class: 'board' },
      state.board.map(row =>
        h(
          'div',
          { class: 'row' },
          row.map(({ status, position }) =>
            Cell({ status, position, onselect: actions.select })
          )
        )
      )
    ),
    h(
      'div',
      { class: 'game-status' },
      `${state.isBlackTurn ? 'Black' : 'White'}'s turn`
    ),
  ]);

const main = app(state, actions, view, document.body);
