"use strict";

// const SUN = "Sun";
// const RAIN = "Rain";
// const SNOW = "Snow";

// const NONE = "None";
// const LIGHT = "Light coat";
// const HEAVY = "Heavy coat";

// TRAINING DATA 1
let trainingData1 = [
    {weather: SUN, temperature: 70, coat: NONE},
    {weather: SUN, temperature: 65, coat: NONE},
    {weather: SUN, temperature: 40, coat: LIGHT},
    {weather: SUN, temperature: 15, coat: HEAVY},
    {weather: SUN, temperature: 7, coat: HEAVY},

    {weather: RAIN, temperature: 75, coat: LIGHT},
    {weather: RAIN, temperature: 67, coat: LIGHT},
    {weather: RAIN, temperature: 58, coat: LIGHT},
    {weather: RAIN, temperature: 52, coat: LIGHT},
    {weather: RAIN, temperature: 42, coat: LIGHT},
    {weather: RAIN, temperature: 27, coat: HEAVY},
    {weather: RAIN, temperature: 15, coat: HEAVY},

    {weather: SNOW, temperature: 32, coat: HEAVY},
    {weather: SNOW, temperature: 21, coat: HEAVY},
    {weather: SNOW, temperature: 14, coat: HEAVY},
    {weather: SNOW, temperature: 3, coat: HEAVY}
];

let decisionTree1 = new dt.DecisionTree({
    trainingSet: trainingData1,
    categoryAttr: 'coat',
});

// TRAINING DATA 2
let trainingData2 = [
    {weather: SUN, temperature: 70, coat: NONE},
    {weather: SUN, temperature: 40, coat: LIGHT},
    {weather: SUN, temperature: 7, coat: HEAVY}
];

let decisionTree2 = new dt.DecisionTree({
    trainingSet: trainingData2,
    categoryAttr: 'coat',
});

let idMap = {
    trainingDataTree1: {
        display: false,
        tree: decisionTree1
    },
    trainingDataTree2: {
        display: false,
        tree: decisionTree2
    }
};

function displayTree(id) {
    if (idMap[id].display === false) {
        document.getElementById(id).innerHTML = treeToHtml(idMap[id].tree.root);
        idMap[id].display = true;
    }
    else {
        document.getElementById(id).innerHTML = "";
        idMap[id].display = false;
    }
}

document.getElementById('trainingDataTree1Evaluation').innerText = evaluateTree(idMap.trainingDataTree1.tree);
document.getElementById('trainingDataTree2Evaluation').innerText = evaluateTree(idMap.trainingDataTree2.tree);
