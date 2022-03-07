function _sumList(numbers = []) {
    return numbers.reduce((p, c) => p + c, 0);
}

function pickValuesThatCompletedMaxValue(numbersOrigin = [], max = 0) {
    const numbers = [...numbersOrigin];

    const numbersThatCompletedMaxValue = [];
    const numbersExcluded = [];
    const numbersOriginSorted = numbers.sort((a, b) => a > b).reverse();

    const sumOrigin = _sumList(numbersOriginSorted);

    if (sumOrigin <= max) {
        return {
            picked: numbersOrigin,
            unPicked: []
        };
    }

    numbersOriginSorted.forEach((weight) => {
        const sum = _sumList(numbersThatCompletedMaxValue);
        const sumOfDryRun = sum + weight;

        if (sumOfDryRun <= max) {
            numbersThatCompletedMaxValue.push(weight);
        } else {
            numbersExcluded.push(weight);
        }
    });

    return {
        picked: numbersThatCompletedMaxValue,
        unPicked: numbersExcluded
    };
}

module.exports = { pickValuesThatCompletedMaxValue };