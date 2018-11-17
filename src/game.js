import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const steps = 3;

const playRound = (generateFn) => {
  const gameData = generateFn();
  const question = car(gameData);
  const correctAnswer = cdr(gameData);

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

const playGame = (descriptionription, generateFn) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(descriptionription);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < steps; i += 1) {
    if (!playRound(generateFn)) {
      console.log(`Let's try again, ${userName} !\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName} !\n`);
};

export default playGame;
