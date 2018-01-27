const { h, app } = hyperapp;
import { ROW_NUMBERS, COLUMN_NUMBERS, STATUSES } from './constants.js';
import Cell from './components/Cell.js';

const initializeBoard = (rowNumbers, columnNumbers) => {
  const board = Array.from({ length: ROW_NUMBERS }).map((_n, y) =>
    Array.from({ length: COLUMN_NUMBERS }).map((_n, x) => ({
      status: STATUSES.EMPTY,
      position: { x, y },
      selectable: true,
    }))
  );

  const blackCells = [
    board[rowNumbers / 2][columnNumbers / 2 - 1],
    board[rowNumbers / 2 - 1][columnNumbers / 2],
  ];
  const whiteCells = [
    board[rowNumbers / 2][columnNumbers / 2],
    board[rowNumbers / 2 - 1][columnNumbers / 2 - 1],
  ];

  blackCells.forEach(cell => (cell.status = STATUSES.BLACK));
  whiteCells.forEach(cell => (cell.status = STATUSES.WHITE));
  [...blackCells, ...whiteCells].forEach(cell => (cell.selectable = false));

  return board;
};

const cloneBoard = board => board.map(row => row.map(cell => ({ ...cell })));

const board = initializeBoard(ROW_NUMBERS, COLUMN_NUMBERS);

const getCells = board =>
  board.reduce((cells, column) => [...cells, ...column]);

const findCell = ({ board, position: { x, y } }) =>
  getCells(board).find(
    ({ position: { x: _x, y: _y } }) => x === _x && y === _y
  );

const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UPPER_RIGHT: 'UPPER_RIGHT',
  UPPER_LEFT: 'UPPER_LEFT',
  LOWER_RIGHT: 'LOWER_RIGHT',
  LOWER_LEFT: 'LOWER_LEFT',
};

const DIRECTIONS_DELTA = {
  [DIRECTIONS.UPPER_LEFT]: { x: -1, y: -1 },
  [DIRECTIONS.UP]: { x: 0, y: -1 },
  [DIRECTIONS.UPPER_RIGHT]: { x: 1, y: -1 },
  [DIRECTIONS.LEFT]: { x: -1, y: 0 },
  [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
  [DIRECTIONS.LOWER_LEFT]: { x: -1, y: 1 },
  [DIRECTIONS.DOWN]: { x: 0, y: 1 },
  [DIRECTIONS.LOWER_RIGHT]: { x: 1, y: 1 },
};

const deltaList = Object.values(DIRECTIONS_DELTA);
console.log(deltaList);

const checkSelectable = ({ position, board, isBlackTurn }) => {
  const { x, y } = position;
  const cell = findCell({ board, position });

  if (currentStatus !== STATUSES.EMPTY) {
    return false;
  }
  const targetStatus = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
};

const existsAgainstAroundCell = ({ board, cell, isBlackTurn }) => {
  const { position: { x, y } } = cell;
  const againstStatus = isBlackTurn ? STATUSES.WHITE : STATUSES.BLACK;
  // find cells around specified cell and filter null
  const aroundCells = deltaList
    .map(({ x: _x, y: _y }) =>
      findCell({ board, position: { x: x + _x, y: y + _y } })
    )
    .filter(_cell => _cell);
  return aroundCells.some(({ status }) => status === againstStatus);
};

const state = {
  isBlackTurn: true,
  board,
};

const actions = {
  select: ({ position }) => ({ board, isBlackTurn }) => {
    const newBoard = cloneBoard(board);
    const selectedCell = findCell({ board: newBoard, position });

    if (!selectedCell.selectable) {
      return;
    }

    selectedCell.status = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
    selectedCell.selectable = false;

    const emptyCells = getCells(newBoard).filter(
      ({ status }) => status === STATUSES.EMPTY
    );
    emptyCells.forEach(cell => {
      const selectable = existsAgainstAroundCell({
        board: newBoard,
        cell,
        isBlackTurn: !isBlackTurn,
      });
      cell.selectable = selectable;
    });
    console.log(newBoard);

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
          row.map(({ status, position, selectable }) =>
            Cell({ status, position, selectable, onselect: actions.select })
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
