import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runEvenGame = () => {
  const gameRulls = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const gameQuestion = `${getRandomInRange(1, 100)}`;

    const isEven = (num) => {
      if (num % 2 === 0) {
        return true;
      } return false;
    };

    const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

    return [gameQuestion, correctAnswer];
  };

  runEngine(gameRulls, generateRound);
};

export default runEvenGame;
