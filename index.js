const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const _ = require('lodash');
const FILE_PATH = './data.json';

const makeCommit = async (n) => {
    if (n === 0) {
        await simpleGit().push();
        return;
    }

    const x = _.random(0, 30);
    const y = _.random(0, 6);
    const DATE = moment()
    .subtract(11, "y")
    .add(15, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

    const data = {
        date: DATE
    }

    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data);

    await simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE });

    makeCommit(n - 1);
};

makeCommit(50);

