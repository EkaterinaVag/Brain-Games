import { getRandomNumber, game } from '../index.js';

const gameEven = () => {
  const gameRulls = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const gameQuestion = `${getRandomNumber(100)}`;

    const isEven = (num) => {
      if (num % 2 === 0) {
        return true;
      } return false;
    };

    const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';

    return [gameQuestion, correctAnswer];
  };

  game(gameRulls, generateRound);
};

export default gameEven;
