const first = require('./first');

describe("first function", () => {

    test("should return first element if n is null", () => {
        expect(first([1, 2, 3])).toBe(1);
    });

    test("should return first n elements", () => {
        expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    });

    test("should return empty array if n <= 0", () => {
        expect(first([1, 2, 3], 0)).toEqual([]);
    });

    test("should return empty array if array is null", () => {
        expect(first(null, 3)).toEqual([]);
    });

});
