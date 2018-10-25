let data_sunny = 'Sunny';
let data_rainy = 'Rainy';
let data_snowy = 'Snowy';

let no_coat = 'none';
let light_coat = 'light coat';
let heavy_coat = 'heavy coat';

let coatMap = new Map();
coatMap.set(no_coat, {name: 'No Coat', cost: 1});
coatMap.set(light_coat, {name: 'Light Coat', cost: 5});
coatMap.set(heavy_coat, {name: 'Heavy Coat', cost: 10});

let trainingData =
    [
        {weather: data_sunny, temperature: 70, coat: no_coat},
        {weather: data_sunny, temperature: 65, coat: no_coat},
        {weather: data_sunny, temperature: 36, coat: light_coat},
        {weather: data_sunny, temperature: 15, coat: heavy_coat},
        {weather: data_sunny, temperature: 7, coat: heavy_coat},

        {weather: data_rainy, temperature: 58, coat: light_coat},
        {weather: data_rainy, temperature: 52, coat: light_coat},
        {weather: data_rainy, temperature: 42, coat: light_coat},
        {weather: data_rainy, temperature: 27, coat: heavy_coat},
        {weather: data_rainy, temperature: 15, coat: heavy_coat},

        {weather: data_snowy, temperature: 32, coat: heavy_coat},
        {weather: data_snowy, temperature: 21, coat: heavy_coat},
        {weather: data_snowy, temperature: 14, coat: heavy_coat},
        {weather: data_snowy, temperature: 3, coat: heavy_coat}
    ];

let config = {
    trainingSet: trainingData,
    categoryAttr: 'coat',
};

function init() {
    // Building Decision Tree
    let decisionTree = new dt.DecisionTree(config);

// Building Random Forest
    let numberOfTrees = 3;
    let randomForest = new dt.RandomForest(config, numberOfTrees);

// Testing Decision Tree and Random Forest
    for (let i = 0; i < 10; i++) {
        let testPoint = generateTestPoint();

        let decisionTreePrediction = decisionTree.predict(testPoint);
        let randomForestPrediction = randomForest.predict(testPoint);

        console.log("TEST: Weather = %s Temperature = %d", testPoint.weather, testPoint.temperature);
        console.log("Decision Tree Prediction: ", decisionTreePrediction);
        console.log("Evaluation: ", evaluateTestPoint(decisionTreePrediction, testPoint));
        // console.log("Random Forest Prediction: ", randomForestPrediction);
        // console.log("Evaluation: ", evaluateTestPoint(decisionTreePrediction, testPoint));
    }
}

function generateTestPoint() {
    let testPoint = {};
    let choice = getRndInteger(0, 2);
    switch (choice) {
        case 0:
            testPoint.weather = data_sunny;
            break;
        case 1:
            testPoint.weather = data_rainy;
            break;
        case 2:
            testPoint.weather = data_snowy;
            break;
    }
    testPoint.temperature = getRndInteger(0, 90);
    return testPoint;
}

function generateDataPoint() {
    let dataPoint = {};
    let choice = getRndInteger(0, 3);
    switch (choice) {
        case 0:
            dataPoint.weather = data_sunny;
            break;
        case 1:
            dataPoint.weather = data_rainy;
            break;
        case 2:
            dataPoint.weather = data_snowy;
            break;
    }
    dataPoint.temperature = getRndInteger(0, 90);
    choice = getRndInteger(0, 3);
    switch (choice) {
        case 0:
            dataPoint.coat = no_coat;
            break;
        case 1:
            dataPoint.coat = light_coat;
            break;
        case 2:
            dataPoint.coat = heavy_coat;
            break;
    }
    return dataPoint;
}


// Helper Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Evaluation Function

// All choices have a cost
// No coat is required for temps over 60
// A light coat is sufficient with temperatures above 30, returning a benefit of 2
// However, a heavy coat was necessary if the temperature was below 32 and it started to snow, providing a benefit of 10.

function evaluateTestPoint(coat, data) {
    let noCoatBreakPoint = 60;
    let lightCoatBreakPoint = 30;

    let benefit = 0;

    // Temperature Evaluation
    if (data.temperature >= noCoatBreakPoint) {
        if (coat === no_coat)
            benefit += 10;
    }
    else if (data.temperature >= lightCoatBreakPoint) {
        if (coat === light_coat)
            benefit += 10;
    }
    else { // test.temperature < lightCoatBreakPoint
        if (coat === light_coat)
            benefit += 5;
        if (coat === heavy_coat)
            benefit += 10;
    }

    // Weather Evaluation
    if (data.weather === data_rainy) {
        if (coat === no_coat)
            benefit -= 5;
    }
    else if (data.weather === data_snowy) {
        if (coat !== heavy_coat)
            benefit -= 5;
    }

    return benefit - coatMap.get(coat).cost;
}