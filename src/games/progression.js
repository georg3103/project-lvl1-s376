import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const progressionLength = 10;

const makeProgression = (start, increment, hiddenElementIndex) => {
  let progression = '';
  let answer;
  for (let i = 0; i < progressionLength; i += 1) {
    const item = `${start + increment * i} `;
    if (i === hiddenElementIndex) {
      progression += '.. ';
      answer = start + increment * i;
    } else {
      progression += item;
    }
  }
  return cons(progression, answer);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGame = () => {
  const start = getRandomNum(1, 100);
  const increment = getRandomNum(-10, 10);
  const hiddenElementIndex = getRandomNum(1, 10);
  const gameData = makeProgression(start, increment, hiddenElementIndex);
  const question = car(gameData);
  const answer = cdr(gameData);

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
