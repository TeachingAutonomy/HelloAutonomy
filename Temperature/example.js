"use strict";

const SUN = "Sun";
const RAIN = "Rain";
const SNOW = "Snow";

const NONE = "None";
const LIGHT = "Light coat";
const HEAVY = "Heavy coat";

let trainingData = [
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

let config = {
    trainingSet: trainingData,
    categoryAttr: 'coat',
};

var decisionTree = new dt.DecisionTree(config);
