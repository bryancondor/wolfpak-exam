function _sumList(shippings = []) {
    return shippings
        .map(({ weight }) => weight)
        .reduce((p, c) => p + c, 0);
}

function sortByWeight(listLocationAndWeight1, listLocationAndWeight2) {
    const weight1 = listLocationAndWeight1.weight;
    const weight2 = listLocationAndWeight2.weight;

    if (weight1 > weight2) {
        return 1
    }

    if (weight1 < weight2) {
        return -1
    }

    return 0;
}

function pickShippingsToPacking(shippingsPending, maxWeight) {
    const shippings = [...shippingsPending];

    const shippingsSorted = shippings
        .sort(sortByWeight)
        .reverse();

    const sumOrigin = _sumList(shippingsSorted);

    if (sumOrigin <= maxWeight) {
        return {
            shippingsPicked: shippingsSorted,
            shippingsUnpicked: []
        };
    }

    const shippingsPicked = [];
    const shippingsSkipped = [];

    shippingsSorted.forEach(({ location, weight }) => {
        const sum = _sumList(shippingsPicked);
        const sumOfDryRun = sum + weight;

        if (sumOfDryRun <= maxWeight) {
            shippingsPicked.push({ location, weight });
        } else {
            shippingsSkipped.push({ location, weight });
        }
    });

    return {
        shippingsPicked,
        shippingsUnpicked: shippingsSkipped
    };
}

module.exports = { pickShippingsToPacking };