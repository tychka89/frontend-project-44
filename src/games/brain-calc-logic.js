import game from '../index.js';
import getRandomNumber from '../random-number.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const calculate = (num1, num2, operator) => {
  switch (operator) {
  case '+':
    return num1 + num2;
  case '-':
    return num1 - num2;
  case '*':
    return num1 * num2;
  default:
    return 'Неизвестный оператор';
  }
};

const setGame = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operator = operations[getRandomNumber(0, 2)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const wrightAnswer = `${calculate(firstNumber, secondNumber, operator)}`;
  return [question, wrightAnswer];
};

const calcGame = () => game(gameRules, setGame);

export default calcGame;
