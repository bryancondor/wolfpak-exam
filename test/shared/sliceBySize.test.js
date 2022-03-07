const { sliceBySize } = require('../../src/shared/sliceBySize');

describe('sliceBySize', () => {
    it('should slice an array in 3 parts', () => {
        const arraySliced = sliceBySize(3, [4, 3, 2, 5, 6, 0, 3]);
        expect(arraySliced).toEqual([[4, 3, 2], [5, 6, 0], [3]]);
    });
});