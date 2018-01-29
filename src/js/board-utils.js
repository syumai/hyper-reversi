import { STATUSES } from './constants';

export const initializeBoard = (rowNumbers, columnNumbers) => {
  const board = Array.from({ length: rowNumbers }).map((_n, y) =>
    Array.from({ length: columnNumbers }).map((_n, x) => ({
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

export const cloneBoard = board =>
  board.map(row => row.map(cell => ({ ...cell })));

export const getCells = board =>
  board.reduce((cells, column) => [...cells, ...column]);

export const findCell = ({ board, position: { x, y } }) =>
  getCells(board).find(
    ({ position: { x: _x, y: _y } }) => x === _x && y === _y
  );

export const countUpCells = board => {
  const cells = getCells(board);
  const black = cells.filter(({ status }) => status === STATUSES.BLACK).length;
  const white = cells.filter(({ status }) => status === STATUSES.WHITE).length;
  return { black, white };
};
