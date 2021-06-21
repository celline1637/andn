const calcTotal = options => {
  const selectedPrice = options.map((el, i) => el.price * el.quantity);
  return selectedPrice.reduce((acc, cur) => {
    return acc + cur;
  }, 3000);
};

export default calcTotal;
