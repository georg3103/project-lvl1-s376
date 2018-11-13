import readlineSync from 'readline-sync';

const sayHello = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export {
  sayHello,
  askName,
};
