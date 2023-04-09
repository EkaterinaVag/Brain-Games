import { getRandomNumber, game } from '../index.js';

const gameCalc = () => {
  const gameRulls = 'What is the result of the expression?';

  const generateRound = () => {
    const sings = ['+', '-', '*'];
    const num = getRandomNumber(2);
    const operation = sings[num];

    const value1 = getRandomNumber(10);
    const value2 = getRandomNumber(10);

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

  game(gameRulls, generateRound);
};

export default gameCalc;
