const mean = require('./notation');

describe("Mean function", () => {

    test("should calculate correct mean", () => {
        const data = [10, 20, 30];
        expect(mean(data)).toBe(20);
    });

    test("should work with a single element", () => {
        expect(mean([50])).toBe(50);
    });

    test("should handle negative numbers", () => {
        expect(mean([-10, 10])).toBe(0);
    });

});
