const chunk = require('./chunk');

describe("chunk function", () => {

    test("should divide array into sub-arrays of given size", () => {
        expect(chunk([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6],[7]]);
    });

    test("should handle size larger than array length", () => {
        expect(chunk([1,2], 5)).toEqual([[1,2]]);
    });

    test("should return empty array if input is empty", () => {
        expect(chunk([], 2)).toEqual([]);
    });

});
