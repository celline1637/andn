const calcRem = pxSize => `${pxSize / 16}rem`;

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const posCenterX = (type = 'absolute') => {
  return `
  position: ${type};
  left:50%;
  transform:translateX(-50%);
  `;
};

const posCenterY = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
  `;
};

const posCenter = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `;
};

const colors = {};

const theme = {
  colors,
  calcRem,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
};

export default theme;
