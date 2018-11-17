import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGame = () => {
  const question = getRandomNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
