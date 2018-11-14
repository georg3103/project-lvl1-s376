import readlineSync from 'readline-sync';

const sayHello = () => console.log('Welcome to the Brain Games!');

const describeTask = () => console.log('Answer "yes" if number even otherwise answer "no".');

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export {
  sayHello,
  askName,
  describeTask,
};
