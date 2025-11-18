const mean = require('./notation');

function calculateLabMean() {
    const lab = [12, 25, 46, 148, 32];
    return mean(lab);
}

module.exports = calculateLabMean; 