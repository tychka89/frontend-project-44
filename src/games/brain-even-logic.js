import game from '../index.js';
import getRandomNumber from '../random-number.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const setGame = () => {
    const question = getRandomNumber(1, 100);
    const wrightAnswer = (question % 2) === 0 ? 'yes' : 'no';
    return [question, wrightAnswer];
};

const evenGame = () => game(gameRules, setGame);

export default evenGame;
