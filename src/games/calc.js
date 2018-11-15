import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import { playGame } from '../game';


const calc = (num1, num2, sign) => {
  let answer;
  if (sign === '+') {
    answer = num1 + num2;
  } else if (sign === '-') {
    answer = num1 - num2;
  } else {
    answer = num1 * num2;
  }
  return answer;
};

const gameDesc = 'What is the result of the expression?';

const generateGame = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const signOptionsArr = ['+', '-', '*'];
  const sign = signOptionsArr[Math.floor(Math.random() * signOptionsArr.length)];
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = calc(firstNum, secondNum, sign);

  return cons(question, String(answer));
};

export default () => playGame(gameDesc, generateGame);
