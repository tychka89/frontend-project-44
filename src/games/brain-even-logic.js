import readlineSync from 'readline-sync';


const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameRounds = 3;

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const game = () => {
    const question = getRandomNumber(1, 100);
    const wrightAnswer = (question % 2) === 0 ? 'yes' : 'no';
    return [question, wrightAnswer];
};

const evenGame = (gameRules, game) => {
    console.log(gameRules);
    for (let i = 0; i < gameRounds; i += 1) {
        const [question, wrightAnswer] = game();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (userAnswer !== wrightAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${wrightAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${name}!`);
};

evenGame(gameRules, game);