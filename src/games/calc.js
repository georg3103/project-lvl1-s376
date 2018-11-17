import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const calc = (num1, num2, sign) => {
  let answer;
  switch (sign) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      break;
  }
  return answer;
};

const description = 'What is the result of the expression?';
const signOptionsArr = ['+', '-', '*'];

const generateGame = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const sign = signOptionsArr[Math.floor(Math.random() * signOptionsArr.length)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = calc(firstNum, secondNum, sign);

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
