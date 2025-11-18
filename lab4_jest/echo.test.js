const exf = require('./echo');

describe("Testing echo function", () => {

    test("should log the string 5 times", () => {
        console.log = jest.fn();  // mock console.log

        exf("hello", 5);

        expect(console.log).toHaveBeenCalledTimes(5);
        expect(console.log).toHaveBeenCalledWith("hello");
    });

    test("should log 0 times when a = 0", () => {
        console.log = jest.fn();

        exf("test", 0);

        expect(console.log).toHaveBeenCalledTimes(0);
    });

});
