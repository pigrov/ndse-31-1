const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const date = new Date();

argv._[0] == `add` && (argv.month || argv.m)
    ? date.setMonth(date.getMonth() + (argv.month || argv.m))
    : (argv.date || argv.d) && date.setDate(date.getDate() + (argv.date || argv.d));

argv._[0] == `sub` && (argv.month || argv.m)
    ? date.setMonth(date.getMonth() - (argv.month || argv.m))
    : (argv.date || argv.d) && date.setDate(date.getDate() - (argv.date || argv.d));

argv._[0] == `current` && console.log(date);
argv._[0] == `current` && (argv.year || argv.y) && console.log(date.getFullYear());
argv._[0] == `current` &&
    (argv.month || argv.m) &&
    console.log(date.toLocaleString("default", { month: "long" }));
argv._[0] == `current` && (argv.date || argv.d) && console.log(date.getDate());

(argv._[0] == `add` || argv._[0] == `sub`) && console.log(`date ${date}`);
