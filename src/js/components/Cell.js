import { h } from 'hyperapp';

const Cell = ({ status, position, selectable, onselect }) => {
  const classNames = [
    'cell',
    status.toLowerCase(),
    selectable ? 'selectable' : null,
  ]
    .filter(value => value)
    .join(' ');
  return h('div', {
    class: classNames,
    onclick: () => {
      onselect({ position });
      console.log(position);
    },
  });
};

export default Cell;
