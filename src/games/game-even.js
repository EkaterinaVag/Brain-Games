import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = (maxNumRandom) => {
    const number = Math.floor(Math.random() * maxNumRandom);
    return number;
  };

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (answer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
        return;
      }
    }
    if (number % 2 !== 0) {
      if (answer === 'no') {
        console.log('Correct!');
      } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEven;
