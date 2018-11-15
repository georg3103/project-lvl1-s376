import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import { playGame } from '../game';


const isEven = num => num % 2 === 0;
const gameDesc = 'Answer "yes" if number even otherwise answer "no"';

const generateGame = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, String(answer));
};

export default () => playGame(gameDesc, generateGame);
