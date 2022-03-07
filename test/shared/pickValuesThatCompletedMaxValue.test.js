const { pickValuesThatCompletedMaxValue } = require("../../src/shared/pickValuesThatCompletedMaxValue");

describe('pickValuesThatCompletedMaxValue', () => {
    it('should be return 2 elements that completed max weight', () => {
        const result = pickValuesThatCompletedMaxValue([2, 3, 4, 5, 5], 10);

        expect(result).toEqual({ picked: [5, 5], unPicked: [4, 3, 2] });
    });

    it('should return 4 elements that completed max weigth', () => {
        const result = pickValuesThatCompletedMaxValue([2, 3, 4, 5, 5, 7, 2], 20);

        expect(result).toEqual({ picked: [7, 5, 5, 3], unPicked: [4, 2, 2] });
    });

    it('should return all elements given that are less than max', () => {
        const result = pickValuesThatCompletedMaxValue([2, 3, 4, 5, 5, 7, 2], 30);

        expect(result).toEqual({ picked: [7, 5, 5, 4, 3, 2, 2], unPicked: [] });
    });

    it('should return 2 elements given that elements in less than max', () => {
        const result = pickValuesThatCompletedMaxValue([3, 3, 4, 7, 9], 15);
        expect(result).toEqual({ picked: [9, 4], unPicked: [7, 3, 3] });
    });
});