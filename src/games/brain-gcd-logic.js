import game from '../index.js';
import getRandomNumber from '../random-number.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const setGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const wrightAnswer = `${gcd(firstNumber, secondNumber)}`;
  return [question, wrightAnswer];
};

const gcdGame = () => game(gameRules, setGame);

export default gcdGame;
