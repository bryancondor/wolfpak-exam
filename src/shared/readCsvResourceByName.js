function readCsvResourceByName(name) {
    const fs = require('fs');
    const path = require('path');
    const { parse } = require('csv-parse/sync');

    const inputPath = path.resolve(path.join('resources', name));
    const inputBuffer = fs.readFileSync(inputPath);
    return parse(inputBuffer, { relaxColumnCountLess: true });
}

module.exports = { readCsvResourceByName }