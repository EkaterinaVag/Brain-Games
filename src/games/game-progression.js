import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const runProgressionGame = () => {
  const gameRulls = 'What number is missing in the progression?';

  const generateRound = () => {
    const progressionLength = 10;
    const progressionStep = getRandomInRange(1, 5);
    const progressionStart = getRandomInRange(1, 50);

    const setProgression = (length, start, step) => {
      const result = [];
      for (let i = 0; i < length; i += 1) {
        result.push(start + step * i);
      }
      return result;
    };

    const progression = setProgression(progressionLength, progressionStart, progressionStep);
    const j = getRandomInRange(0, 9);
    const correctAnswer = String(progression[j]);

    const progressionForUser = progression;
    progressionForUser[j] = '..';
    const gameQuestion = `${progressionForUser.join(' ')}`;

    return [gameQuestion, correctAnswer];
  };

  runEngine(gameRulls, generateRound);
};

export default runProgressionGame;
