const last = require('./last');

describe("last function", () => {

    test("should return last element if n is null", () => {
        expect(last([1, 2, 3])).toBe(3);
    });

    test("should return last n elements", () => {
        expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    });

    test("should return empty array if array is null", () => {
        expect(last(null, 2)).toEqual([]);
    });

});
