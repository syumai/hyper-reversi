const { h } = hyperapp;
const { toLower } = _;

const Cell = ({ status, position, onselect }) => {
  const classNames = `cell ${toLower(status)}`;
  return h('div', {
    class: classNames,
    onclick: () => {
      onselect({ position });
      console.log(position);
    },
  });
};

export default Cell;
