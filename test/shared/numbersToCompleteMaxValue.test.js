const { numbersToCompleteMaxValue } = require("../../src/shared/numbersToCompleteMaxValue");

describe('numbersToCompleteMaxValue', () => {
    it('should be return 2 elements that completed max weight', () => {
        const numbers = numbersToCompleteMaxValue([2, 3, 4, 5, 5], 10);

        expect(numbers).toEqual([5, 5]);
    });

    it('should return 4 elements that completed max weigth', () => {
        const numbers = numbersToCompleteMaxValue([2, 3, 4, 5, 5, 7, 2], 20);

        expect(numbers).toEqual([7, 5, 5, 3]);
    });

    it('should return all elements given that are less than max', () => {
        const numbers = numbersToCompleteMaxValue([2, 3, 4, 5, 5, 7, 2], 30);

        expect(numbers).toEqual([7, 5, 5, 4, 3, 2, 2]);
    });

    it('should return 2 elements given that elements in less than max', () => {
        const numbers = numbersToCompleteMaxValue([3, 3, 4, 7, 9], 15);
        expect(numbers).toEqual([9, 4]);
    });
});