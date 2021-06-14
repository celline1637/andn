const calcVw = (width, px) => {
  return `${(px / width) * 100}vw`;
};

const calcVwL = px => {
  return `${(px / 1920) * 100}vw`;
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

const colors = {
  primary_bgc: '#e8e8e8',
  secondary_bgc: '#fafafa',
  tertiary_bgc: '#f3f3f3',
  bgc: '#f7f7f7',
  secondary_text: '#888888',
  btn: '#ff7c00',
  border: '#dbdbdb',
  secondary_btn: '#999999',
  black: '#252525',
  white: '#fff',
  th: '#555555',
  complete_btn: '#aaaaaa',
  red: '#F52D1E',
};

const theme = {
  colors,
  calcVw,
  calcVwL,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
};

export default theme;
