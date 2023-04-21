import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const gameQuestion = `${getRandomInRange(1, 100)}`;
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const runEvenGame = () => {
  const gameRulls = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(gameRulls, generateRound);
};

export default runEvenGame;
