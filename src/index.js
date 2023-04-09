import readlineSync from 'readline-sync';

export const getRandomNumber = (maxNumRandom) => {
  const number = Math.floor(Math.random() * maxNumRandom);
  return number;
};

export const game = (gameRulls, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(`${gameRulls}`);

  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, correctAnswer] = generateRound();
    console.log(gameQuestion);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
