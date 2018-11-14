const getRandomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const head = arr => arr[0];

const tail = arr => arr[arr.length - 1];

export {
  getRandomNum,
  head,
  tail,
};
