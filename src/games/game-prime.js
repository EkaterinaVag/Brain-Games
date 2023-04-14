import { getRandomNumber, game } from '../index.js';

const gamePrime = () => {
  const gameRulls = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const gameQuestion = getRandomNumber(50);

    const isPrime = (num) => {
      if (num < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

    return [gameQuestion, correctAnswer];
  };
  game(gameRulls, generateRound);
};

export default gamePrime;
