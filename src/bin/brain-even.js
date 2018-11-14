#!/usr/bin/env node

import { getRandomNum } from '../utils';
import { playGame } from '../game';


const isEven = num => num % 2 === 0;
const stepsLimit = 3;
const gameDesc = 'Answer "yes" if number even otherwise answer "no"';

const generateGame = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, String(answer)];
};

playGame(stepsLimit, gameDesc, generateGame);
