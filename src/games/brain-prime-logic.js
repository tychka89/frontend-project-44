import game from '../index.js';
import getRandomNumber from '../random-number.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const setGame = () => {
  const question = getRandomNumber(1, 100);
  const wrightAnswer = prime(question) ? 'yes' : 'no';
  // const wrightAnswer = `${hiddenIndex}`;
  return [question, wrightAnswer];
};
const primeGame = () => game(gameRules, setGame);
export default primeGame;
