import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const gcd = (num1, num2) => (num1 === 0 ? num2 : gcd(num2 % num1, num1));

const description = 'Find the greatest common divisor of given numbers.';

const generateGame = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `Question: ${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum);

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
