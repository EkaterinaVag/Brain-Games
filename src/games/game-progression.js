import { getRandomNumber, game } from '../index.js';

const gameProgression = () => {
  const gameRulls = 'What number is missing in the progression?';

  const generateRound = () => {
    const progressionLength = 10;
    const progressionStep = getRandomNumber(5) + 1;
    const progressionStart = getRandomNumber(50);

    const setProgression = (length, start, step) => {
      const result = [];
      for (let i = 0; i < length; i += 1) {
        result.push(start + step * i);
      }
      return result;
    };

    const progression = setProgression(progressionLength, progressionStart, progressionStep);
    const j = getRandomNumber(9);
    const correctAnswer = String(progression[j]);

    const progressionForUser = progression;
    progressionForUser[j] = '..';
    const gameQuestion = progressionForUser.join(' ');

    return [gameQuestion, correctAnswer];
  };

  game(gameRulls, generateRound);
};

export default gameProgression;
