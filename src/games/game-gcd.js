import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runGcdGame = () => {
  const gameRulls = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const value1 = getRandomInRange(1, 20);
    const value2 = getRandomInRange(1, 20);

    const gameQuestion = `${value1} ${value2}`;

    const getCorrectAnswer = (num1, num2) => {
      if (!num2) {
        return num1;
      }
      return getCorrectAnswer(num2, num1 % num2);
    };

    const correctAnswer = `${getCorrectAnswer(value1, value2)}`;

    return [gameQuestion, correctAnswer];
  };

  runEngine(gameRulls, generateRound);
};

export default runGcdGame;
