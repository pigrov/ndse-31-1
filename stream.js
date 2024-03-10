const fs = require("fs");
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//const log = path.

const question = (filename) => {
    let dig = getRandomInt(1, 2);

    rl.question("Орел или решка? 1 - орел, 2 - решка: ", (answer) => {
        answer == parseInt(answer, 10)
            ? answer == dig
                ? console.log(`Угадал!!!`)
                : console.log(`НЕ Угадал!!!`)
            : console.log(`${answer} - это не число`);

        fs.appendFile(
            `${filename || "log"}.txt`,
            `${new Date()} ${answer == dig ? "1" : "0"} \n`,
            (e) => {
                if (e) throw Error(e);
            }
        );

        answer == dig ? rl.close() : question(filename);
    });
};

rl.question("Введите имя файла, куда бдем писать логи: ", (filename) => {
    question(filename);
});
