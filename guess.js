const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dig = getRandomInt(0, 100);

const question = (dig) =>
    rl.question("Загадано число в диапазоне от 0 до 100, угадай!", (answer) => {
        answer == parseInt(answer, 10)
            ? answer > dig
                ? console.log(`Меньше`)
                : answer < dig
                ? console.log(`Больше`)
                : console.log("УРА!!!!")
            : console.log(`${answer} - это не число`);

        answer == dig ? rl.close() : question(dig);
    });

question(dig);
