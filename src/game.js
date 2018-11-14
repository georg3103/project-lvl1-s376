import readlineSync from 'readline-sync';
import { head, tail } from './utils';

const playRound = (generateFn) => {
  const gameData = generateFn();
  const question = head(gameData);
  const correctAnswer = tail(gameData);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase(); 
  const isCorrect = userAnswer === correctAnswer;
  if (isCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return isCorrect;
};

const playGame = (steps, gameDescription, generateFn) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let n = 0;
  while (n < steps) {
    if (!playRound(generateFn)) {
      console.log(`Let's try again, ${userName} !\n`);
      return;
    }
    n += 1;
  }
  console.log(`Congratulations, ${userName} !\n`);
};

export {
  playRound,
  playGame,
};
