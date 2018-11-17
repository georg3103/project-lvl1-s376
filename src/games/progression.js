import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const makeProgression = (start, increment, sign, randomIndex) => {
  let progression = 'Question: ';
  let answer;
  for (let i = 0; i < 10; i += 1) {
    const item = (sign === '+' ? `${start + increment * i} ` : `${start - increment * i} `);
    if (i === randomIndex) {
      progression += '.. ';
      answer = item;
    } else {
      progression += item;
    }
  }
  return cons(progression, answer);
}

const description = 'Find the greatest common divisor of given numbers.';
const signOptionsArr = ['+', '-'];

const generateGame = () => {
  const start = getRandomNum(1, 100);
  const increment = getRandomNum(1, 100);
  const sign = signOptionsArr[Math.floor(Math.random() * signOptionsArr.length)];
  const randomIndex = getRandomNum(1, 10);
  const gameData = makeProgression(start, increment, sign, randomIndex);
  const question = car(gameData);
  const answer = cdr(gameData);

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
