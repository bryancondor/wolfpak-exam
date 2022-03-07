function _sumList(numbers = []) {
    return numbers.reduce((p, c) => p + c, 0);
}

function numbersToCompleteMaxValue(numbersOrigin = [], max = 0) {
    const numbersThatCompletedMaxValue = [];
    const numbersOriginSorted = numbersOrigin.sort().reverse();
    const sumOrigin = _sumList(numbersOriginSorted);

    if (sumOrigin <= max) {
        return numbersOrigin;
    }

    numbersOriginSorted.forEach((weight) => {
        const sum = _sumList(numbersThatCompletedMaxValue);
        const sumOfDryRun = sum + weight;

        if (sumOfDryRun <= max) {
            numbersThatCompletedMaxValue.push(weight);
        }
    });

    return numbersThatCompletedMaxValue;
}

module.exports = { numbersToCompleteMaxValue };