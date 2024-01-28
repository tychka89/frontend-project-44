import game from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const gameRounds = 3;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const gcd = (num1, num2) => {
    while (num2 !== 0) {
        let temp = num1 % num2;
        num1 = num2;
        num2 = temp;
    }
    return num1;
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
