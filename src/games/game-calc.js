import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runCalcGame = () => {
  const gameRulls = 'What is the result of the expression?';

  const generateRound = () => {
    const sings = ['+', '-', '*'];
    const num = getRandomInRange(0, 2);
    const operation = sings[num];

    const value1 = getRandomInRange(0, 10);
    const value2 = getRandomInRange(0, 10);

    const gameQuestion = `${value1} ${operation} ${value2}`;

    const getCorrectAnswer = () => {
      switch (operation) {
        case '+':
          return value1 + value2;
        case '-':
          return value1 - value2;
        case '*':
          return value1 * value2;
        default:
          return null;
      }
    };
    const correctAnswer = `${getCorrectAnswer()}`;

    return [gameQuestion, correctAnswer];
  };

  runEngine(gameRulls, generateRound);
};

export default runCalcGame;
