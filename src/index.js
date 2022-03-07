'use strict'
const { pickValuesThatCompletedMaxValue } = require('./shared/pickValuesThatCompletedMaxValue');
const { sliceBySize } = require('./shared/sliceBySize');

const parseToDroneAndMaxWeight = ([droneName, maxWeight]) => ({ droneName, maxWeight: Number(maxWeight) });
const parseToLocationAndWeight = ([location, weight]) => ({ location, weight: Number(weight) });

const dataFromCsv = () => {
    const fs = require('fs');
    const path = require('path');
    const { parse } = require('csv-parse/sync');

    const inputPath = path.resolve(path.join('resources', 'input.csv'));
    const inputBuffer = fs.readFileSync(inputPath);
    return parse(inputBuffer, { relaxColumnCountLess: true });
}

const [listDroneAndMaxWeight, ...listLocationAndWeight] = dataFromCsv();

const listDroneAndMaxWeightParsed = sliceBySize(2, listDroneAndMaxWeight)
    .map(parseToDroneAndMaxWeight);

const listLocationAndWeightParsed = sliceBySize(2, listLocationAndWeight)
    .flat()
    .map(parseToLocationAndWeight);

// Pending to implemente, how packing the drones to be efficient
const weigthOfLocations = listLocationAndWeightParsed.map(({ weight }) => weight);
console.log('[bcd] weigthOfLocations:', weigthOfLocations);


listDroneAndMaxWeightParsed.forEach(({ maxWeight }) => {
    const data = pickValuesThatCompletedMaxValue(weigthOfLocations, Number(maxWeight))

    console.log(`[bcd] Drone with max weight ${maxWeight}`, data);
});

console.log('[bcd] listDroneAndMaxWeightParsed:', listDroneAndMaxWeightParsed);
console.log('[bcd] listLocationAndWeightParsed:', listLocationAndWeightParsed);





