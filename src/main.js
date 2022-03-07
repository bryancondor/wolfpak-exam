'use strict'
const { pickShippingsToPacking, readCsvResourceByName, sliceBySize } = require('./shared');

const [droneSpecificationsUnprocessed, ...shippingsUnprocessed] = readCsvResourceByName('input.csv');

const parseToDroneSpecification = ([droneName, maxWeight]) => ({ droneName, maxWeight: Number(maxWeight) });
const parseToShipping = ([location, weight]) => ({ location, weight: Number(weight) });

const droneSpecifications = sliceBySize(2, droneSpecificationsUnprocessed)
    .map(parseToDroneSpecification);

const shippings = sliceBySize(2, shippingsUnprocessed)
    .flat()
    .map(parseToShipping);


const assignShippingsToDrone = (specificationsOfDrone, shippingsPending, shippingsAssignedFunction) => {
    let _shippings = [...shippingsPending];

    specificationsOfDrone.forEach(({ droneName, maxWeight }) => {
        const { shippingsPicked, shippingsUnpicked } = pickShippingsToPacking(_shippings, maxWeight);
        _shippings = [...shippingsUnpicked];

        shippingsAssignedFunction({ droneName, maxWeight, shippingsPicked });
    });

    if (_shippings.length > 0) {
        assignShippingsToDrone(specificationsOfDrone, _shippings, shippingsAssignedFunction);
    }
}

const itinerary = {};

assignShippingsToDrone(droneSpecifications, shippings, (shippingsAssignedByDrone) => {
    const { droneName, maxWeight, shippingsPicked } = shippingsAssignedByDrone;

    if (!itinerary[droneName]) {
        itinerary[droneName] = {};
    }

    itinerary[droneName].maxWeight = maxWeight;

    if (!itinerary[droneName].trips) {
        itinerary[droneName].trips = []
    }

    if (shippingsPicked.length < 1) {
        return
    }

    itinerary[droneName].trips.push(shippingsPicked);
})

const printItinerary = (_itinerary) => {
    console.log('.: ITINERARY :.', '\n');

    Object.entries(_itinerary).forEach(([droneName, { maxWeight, trips }]) => {
        console.group(`${droneName} (max ${maxWeight}kg)`);

        trips.forEach((trip, index) => {
            const routes = trip.map(({ location, weight }) => `${location} (${weight}kg)`).join(', ');
            console.log(`Trip: #${index + 1}`)
            console.log(`Routes: ${routes}`, '\n');
        })

        console.groupEnd();
    });

}

printItinerary(itinerary);



