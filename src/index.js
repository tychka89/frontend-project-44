import readlineSync from 'readline-sync';

const gameRounds = 3;

const game = (gameRules, setGame) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(gameRules);
    for (let i = 0; i < gameRounds; i += 1) {
        const [question, wrightAnswer] = setGame();
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

export default game;
