import game from '../index.js';
import getRandomNumber from '../random-number.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(start + step * i);
    }
    return progression;
};

const setGame = () => {
    const firstStep = getRandomNumber(1, 10);
    const step = getRandomNumber(1, 10);
    const length = getRandomNumber(5, 10);
    const progression = generateProgression(firstStep, step, length);
    const randomIndex = getRandomNumber(0, progression.length - 1);
    const hiddenIndex = progression[randomIndex];
    const wrightAnswer = `${hiddenIndex}`;
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    // const wrightAnswer = `${hiddenIndex}`;
    return [question, wrightAnswer];
};

const progressionGame = () => game(gameRules, setGame);

export default progressionGame;
