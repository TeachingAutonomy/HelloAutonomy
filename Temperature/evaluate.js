"use strict";

// const SUN = "Sun";
// const RAIN = "Rain";
// const SNOW = "Snow";

// const NONE = "None";
// const LIGHT = "Light coat";
// const HEAVY = "Heavy coat";

function evaluateTestPoint(coat, data) {
    // Ranking on a 10pt scale

    let HOT = 60;
    let COLD = 30;

    if (data.weather === SUN) {
        // Sunny over HOT
        if (data.temperature >= HOT) {
            if (coat === NONE)
                return 10;
            if (coat === LIGHT)
                return 0;
            if (coat === HEAVY)
                return -5;
        }
        // Sunny between COLD & HOT
        if (data.temperature < HOT && data.temperature > COLD) {
            if (coat === NONE)
                return 3;
            if (coat === LIGHT)
                return 10;
            if (coat === HEAVY)
                return -3;
        }
        // Sunny under COLD
        if (data.temperature <= COLD) {
            if (coat === NONE)
                return -3;
            if (coat === LIGHT)
                return 0;
            if (coat === HEAVY)
                return 10;
        }
    }
    if (data.weather === RAIN) {
        // Rainy over HOT
        if (data.temperature >= HOT) {
            if (coat === NONE)
                return -3;
            if (coat === LIGHT)
                return 10;
            if (coat === HEAVY)
                return 0;
        }
        // Rainy between COLD & HOT
        if (data.temperature < HOT && data.temperature > COLD) {
            if (coat === NONE)
                return 0;
            if (coat === LIGHT)
                return 10;
            if (coat === HEAVY)
                return 0;
        }
        // Rainy under COLD
        if (data.temperature <= COLD) {
            if (coat === NONE)
                return 0;
            if (coat === LIGHT)
                return 3;
            if (coat === HEAVY)
                return 10;
        }
    }
    if (data.weather === SNOW) {
        // Snowy over HOT
        if (data.temperature >= HOT) {
            console.log("It should never be 60deg and snowing");
            return 0;
        }
        // Snowy between COLD & HOT
        if (data.temperature < HOT && data.temperature > COLD) {
            if (coat === NONE)
                return -3;
            if (coat === LIGHT)
                return 3;
            if (coat === HEAVY)
                return 10;
        }
        // Snowy under COLD
        if (data.temperature <= COLD) {
            if (coat === NONE)
                return -3;
            if (coat === LIGHT)
                return 0;
            if (coat === HEAVY)
                return 10;
        }
    }

    console.log(data, "Unaccounted for scenario");
    return 0;
}

function evaluateTree(tree) {
    let total = 0;
    let i = 0;
    for (; i < 1000; i++) {
        let testPoint = generateTestPoint();

        let decisionTreePrediction = tree.predict(testPoint);
        total += evaluateTestPoint(decisionTreePrediction, testPoint);
    }
    return total / i;
}

function generateTestPoint() {
    let testPoint = {};
    let choice = getRndInteger(0, 2);
    switch (choice) {
        case 0:
            testPoint.weather = SUN;
            testPoint.temperature = getRndInteger(0, 90);
            break;
        case 1:
            testPoint.weather = RAIN;
            testPoint.temperature = getRndInteger(0, 90);
            break;
        case 2:
            testPoint.weather = SNOW;
            testPoint.temperature = getRndInteger(0, 40);
            break;
    }
    return testPoint;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
