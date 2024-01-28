import readlineSync from 'readline-sync';
import game from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRounds = 3;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const setGame = () => {
    const question = getRandomNumber(1, 100);
    const wrightAnswer = (question % 2) === 0 ? 'yes' : 'no';
    return [question, wrightAnswer];
};

const evenGame = () => game(gameRules, setGame);

export default evenGame;
