import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import playGame from '../game';

const makeProgression = (start, increment, hiddenElementIndex, progressionLength) => {
  let progression = '';
  for (let i = 0; i < progressionLength; i += 1) {
    const item = `${start + increment * i} `;
    if (i === hiddenElementIndex) {
      progression += '.. ';
    } else {
      progression += item;
    }
  }
  return progression;
};

const description = 'Find the greatest common divisor of given numbers.';

const generateGame = () => {
  const start = getRandomNum(1, 100);
  const increment = getRandomNum(-10, 10);
  const hiddenElementIndex = getRandomNum(1, 10);
  const progressionLength = 10;
  const gameData = makeProgression(start, increment, hiddenElementIndex, progressionLength);
  const question = gameData;
  const answer = start + increment * hiddenElementIndex;

  return cons(question, String(answer));
};

export default () => playGame(description, generateGame);
