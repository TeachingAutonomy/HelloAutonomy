let trainingData =
    [
        {weather: 'Sunny', temperature: 70, coat: 'None'},
        {weather: 'Sunny', temperature: 65, coat: 'None'},
        {weather: 'Sunny', temperature: 36, coat: 'Light coat'},
        {weather: 'Sunny', temperature: 15, coat: 'Heavy coat'},
        {weather: 'Sunny', temperature: 7, coat: 'Heavy coat'},

        {weather: 'Rainy', temperature: 58, coat: 'Light coat'},
        {weather: 'Rainy', temperature: 52, coat: 'Light coat'},
        {weather: 'Rainy', temperature: 42, coat: 'Light coat'},
        {weather: 'Rainy', temperature: 27, coat: 'Heavy coat'},
        {weather: 'Rainy', temperature: 15, coat: 'Heavy coat'},

        {weather: 'Snowy', temperature: 35, coat: 'Heavy coat'},
        {weather: 'Snowy', temperature: 32, coat: 'Heavy coat'},
        {weather: 'Snowy', temperature: 21, coat: 'Heavy coat'},
        {weather: 'Snowy', temperature: 14, coat: 'Heavy coat'},
        {weather: 'Snowy', temperature: 3, coat: 'Heavy coat'}
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
        let test = generateTestPoint();

        let decisionTreePrediction = decisionTree.predict(test);
        let randomForestPrediction = randomForest.predict(test);

        console.log("TEST VALUE: ", test);
        console.log("Decision Tree Prediction: ", decisionTreePrediction);
        console.log("Random Forest Prediction: ", randomForestPrediction);
    }
}


function generateTestPoint() {
    let testPoint = {};
    let choice = getRndInteger(0, 2);
    switch (choice) {
        case 0:
            testPoint.weather = 'Sunny';
            break;
        case 1:
            testPoint.weather = 'Rainy';
            break;
        case 2:
            testPoint.weather = 'Snowy';
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
            dataPoint.weather = 'Sunny';
            break;
        case 1:
            dataPoint.weather = 'Rainy';
            break;
        case 2:
            dataPoint.weather = 'Snowy';
            break;
    }
    dataPoint.temperature = getRndInteger(0, 90);
    choice = getRndInteger(0, 3);
    switch (choice) {
        case 0:
            dataPoint.coat = 'None';
            break;
        case 1:
            dataPoint.weather = 'Light coat';
            break;
        case 2:
            dataPoint.weather = 'Heavy coat';
            break;
    }
    return dataPoint;
}


// Helper Functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}