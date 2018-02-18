import { h, app } from 'hyperapp';
import {
  ROW_NUMBERS,
  COLUMN_NUMBERS,
  STATUSES,
  DIRECTIONS,
  DIRECTIONS_DELTA,
} from './constants';
import { initializeBoard, cloneBoard, getCells, findCell } from './board-utils';
import Cell from './components/Cell';
import GameStatus from './components/GameStatus';

const directionList = Object.values(DIRECTIONS);

const deltaList = Object.values(DIRECTIONS_DELTA);

const getDirection = positionDelta => {
  const [direction] =
    Object.entries(DIRECTIONS_DELTA).find(
      ([direction, { x, y }]) => positionDelta.x === x && positionDelta.y === y
    ) || [];
  return direction;
};

// find cells around specified cell and filter null
const getAroundCells = ({ board, position: { x, y } }) =>
  deltaList
    .map(({ x: _x, y: _y }) =>
      findCell({ board, position: { x: x + _x, y: y + _y } })
    )
    .filter(_cell => _cell);

const getReversibleCells = ({
  board,
  cell,
  targetStatus,
  direction,
  reversibleCells = [],
}) => {
  const endStatus =
    targetStatus === STATUSES.BLACK ? STATUSES.WHITE : STATUSES.BLACK;
  const { position } = cell;
  const positionDelta = DIRECTIONS_DELTA[direction];
  const nextCell = findCell({
    board,
    position: {
      x: position.x + positionDelta.x,
      y: position.y + positionDelta.y,
    },
  });
  const nextReversibleCells = [...reversibleCells, cell];
  if (!nextCell) {
    return [];
  } else if (nextCell.status === STATUSES.EMPTY) {
    return [];
  } else if (nextCell.status === endStatus) {
    return nextReversibleCells;
  } else {
    return getReversibleCells({
      board,
      cell: nextCell,
      targetStatus,
      direction,
      reversibleCells: nextReversibleCells,
    });
  }
};

const existsReversibleAroundCell = ({ board, cell, isBlackTurn }) => {
  const nextAgainstStatus = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
  const { position } = cell;
  const aroundCells = getAroundCells({ board, position });
  const againstCells = aroundCells.filter(
    ({ status }) => status === nextAgainstStatus
  );
  return againstCells.some(againstCell => {
    const { position: againstPosition } = againstCell;
    const positionDelta = {
      x: againstPosition.x - position.x,
      y: againstPosition.y - position.y,
    };
    const direction = getDirection(positionDelta);
    const reversibleCells = getReversibleCells({
      board,
      cell: againstCell,
      targetStatus: nextAgainstStatus,
      direction,
    });
    return reversibleCells.length > 0;
  });
};

const state = {
  isBlackTurn: true,
  board: initializeBoard(ROW_NUMBERS, COLUMN_NUMBERS),
  gameFinished: false,
};

const actions = {
  initialize: () => (state, actions) => {
    actions.initializeState();
    actions.updateSelectableCells();
  },

  initializeState: () => () => ({
    isBlackTurn: true,
    board: initializeBoard(ROW_NUMBERS, COLUMN_NUMBERS),
    gameFinished: false,
  }),

  updateSelectableCells: () => ({ board, isBlackTurn }) => {
    const newBoard = cloneBoard(board);

    const emptyCells = getCells(newBoard).filter(
      ({ status }) => status === STATUSES.EMPTY
    );

    emptyCells.forEach(cell => (cell.selectable = false));

    const selectableCells = emptyCells.filter(cell =>
      existsReversibleAroundCell({
        board: newBoard,
        cell,
        isBlackTurn: !isBlackTurn,
      })
    );

    selectableCells.forEach(cell => (cell.selectable = true));

    return {
      board: newBoard,
      gameFinished: selectableCells.length === 0,
    };
  },

  select: ({ position }) => ({ board, isBlackTurn }) => {
    const newBoard = cloneBoard(board);
    const selectedCell = findCell({ board: newBoard, position });

    if (!selectedCell.selectable) {
      return;
    }

    const reversibleCells = directionList
      .map(direction =>
        getReversibleCells({
          board: newBoard,
          cell: selectedCell,
          targetStatus: isBlackTurn ? STATUSES.WHITE : STATUSES.BLACK,
          direction,
        })
      )
      .reduce((allCells, cell) => [...allCells, ...cell]);

    reversibleCells.forEach(cell => {
      cell.status = isBlackTurn ? STATUSES.BLACK : STATUSES.WHITE;
      cell.selectable = false;
    });
    console.log(newBoard);

    return {
      board: newBoard,
      isBlackTurn: !isBlackTurn,
    };
  },

  selectAndUpdateSelectableCells: ({ position }) => (state, actions) => {
    actions.select({ position });
    actions.updateSelectableCells();
  },
};

const view = ({ board, isBlackTurn, gameFinished }, actions) => {
  return h('div', { oncreate: actions.updateSelectableCells }, [
    h(
      'div',
      { class: 'board' },
      board.map(row =>
        h(
          'div',
          { class: 'row' },
          row.map(({ status, position, selectable }) =>
            Cell({
              status,
              position,
              selectable,
              onselect: actions.selectAndUpdateSelectableCells,
            })
          )
        )
      )
    ),
    GameStatus({
      board,
      isBlackTurn,
      gameFinished,
      onclickRestart: actions.initialize,
    }),
    h(
      'div',
      { class: 'info' },
      h(
        'a',
        {
          class: 'link github',
          href: 'https://github.com/syumai/hyper-reversi/',
        },
        'GitHub'
      )
    ),
  ]);
};

const main = app(state, actions, view, document.body);
