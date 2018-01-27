const { h } = hyperapp;
const { toLower } = _;

const Cell = ({ status, position, selectable, onselect }) => {
  const classNames = ['cell', toLower(status), selectable ? 'selectable' : null]
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
