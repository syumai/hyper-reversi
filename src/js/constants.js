export const ROW_NUMBERS = 8;

export const COLUMN_NUMBERS = 8;

export const STATUSES = {
  EMPTY: 'EMPTY',
  BLACK: 'BLACK',
  WHITE: 'WHITE',
};

export const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  UPPER_RIGHT: 'UPPER_RIGHT',
  UPPER_LEFT: 'UPPER_LEFT',
  LOWER_RIGHT: 'LOWER_RIGHT',
  LOWER_LEFT: 'LOWER_LEFT',
};

export const DIRECTIONS_DELTA = {
  [DIRECTIONS.UPPER_LEFT]: { x: -1, y: -1 },
  [DIRECTIONS.UP]: { x: 0, y: -1 },
  [DIRECTIONS.UPPER_RIGHT]: { x: 1, y: -1 },
  [DIRECTIONS.LEFT]: { x: -1, y: 0 },
  [DIRECTIONS.RIGHT]: { x: 1, y: 0 },
  [DIRECTIONS.LOWER_LEFT]: { x: -1, y: 1 },
  [DIRECTIONS.DOWN]: { x: 0, y: 1 },
  [DIRECTIONS.LOWER_RIGHT]: { x: 1, y: 1 },
};
