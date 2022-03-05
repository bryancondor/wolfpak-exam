'use strict'
const { sliceBySize } = require('./shared/sliceBySize');

const parseToDroneAndWeight = ([droneName, weight]) => ({ droneName, weight });
const parseToLocationAndWeight = ([location, weight]) => ({ location, weight });

const dataFromCsv = () => {
    const fs = require('fs');
    const path = require('path');
    const { parse } = require('csv-parse/sync');

    const inputPath = path.resolve(path.join('resources', 'input.csv'));
    const inputBuffer = fs.readFileSync(inputPath);
    return parse(inputBuffer, { relaxColumnCountLess: true });
}

const [listDroneAndWeight, ...listLocationAndWeight] = dataFromCsv();

const listDroneAndWeightParsed = sliceBySize(2, listDroneAndWeight)
    .map(parseToDroneAndWeight);

const listLocationAndWeightParsed = sliceBySize(2, listLocationAndWeight)
    .flat()
    .map(parseToLocationAndWeight);

// Pending to implemente, how packing the drones to be efficient








console.log('[bcd] listDroneAndWeightParsed:', listDroneAndWeightParsed);
console.log('[bcd] listLocationAndWeightParsed:', listLocationAndWeightParsed);





