const concatStrings = require('./concatStrings');

describe("concatStrings function", () => {

    const colors = ["Red", "Green", "White", "Black"];

    test("should join without separator", () => {
        expect(concatStrings(colors)).toBe("RedGreenWhiteBlack");
    });

    test("should join with comma separator", () => {
        expect(concatStrings(colors, ',')).toBe("Red,Green,White,Black");
    });

    test("should join with default toString() separator", () => {
        expect(colors.toString()).toBe("Red,Green,White,Black");
    });

});
