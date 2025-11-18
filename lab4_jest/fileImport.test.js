const calculateLabMean = require('./fileImport');

describe("fileImport.js test", () => {

    test("mean of lab array should be correct", () => {
        expect(calculateLabMean()).toBe(52.6);
    });

});
