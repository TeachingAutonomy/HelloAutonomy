let data_sunny = "Sun";
let data_rainy = "Rain";
let data_snowy = "Snow";

let no_coat = "None";
let light_coat = "Light coat";
let heavy_coat = "Heavy coat";

let trainingData = [
    {weather: data_sunny, temperature: 70, coat: no_coat},
    {weather: data_sunny, temperature: 65, coat: no_coat},
    {weather: data_sunny, temperature: 40, coat: light_coat},
    {weather: data_sunny, temperature: 15, coat: heavy_coat},
    {weather: data_sunny, temperature: 7, coat: heavy_coat},

    {weather: data_rainy, temperature: 75, coat: light_coat},
    {weather: data_rainy, temperature: 67, coat: light_coat},
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

let decisionTree = new dt.DecisionTree(config);
document.getElementById('displayTreeResults').innerHTML = treeToHtml(decisionTree.root);
