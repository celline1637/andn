const calcRem = pxSize => `${pxSize / 16}rem`;
const calcVw = (width, px) => {
  return `${(px / width) * 100}vw`;
};
const calcVh = (height, px) => {
  return `${(px / height) * 100}vh`;
};

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
  transform:translateX(-50%);z
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

const colors = {
  primary_bgc: '#e8e8e8',
  secondary_bgc: '#fafafa',
  tertiary_bgc: '#f3f3f3',
  bgc: '#f7f7f7',
  btn: '#ff7c00',
  black: '#252525',
  white: '#fff',
};

const theme = {
  colors,
  calcRem,
  calcVh,
  calcVw,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
};

export default theme;
