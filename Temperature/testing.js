function initTestingTree() {
    let testTrainingData = [];

    let testConfig = {
        trainingSet: testTrainingData,
        categoryAttr: 'coat',
    };

    let userInput = document.getElementById('currentContent').getElementsByClassName("data-entry-set");
    for (let i = 0; i < userInput.length; i++) {
        if (!userInput[i].classList.contains("hidden")) {
            console.log(userInput[i].id);
            // Get the information out of the form and update testTrainingData
        }
    }

    // Currently causing errors so is commented
    // let decisionTree = new dt.DecisionTree(testConfig);
    // document.getElementById('displayTreeTest').innerHTML = treeToHtml(decisionTree.root);
}

let fieldSetCount = 1;

function addFieldSet(form) {
    let ele = document.getElementById('data-entry-sample').cloneNode(true);
    ele.classList.remove("hidden");
    ele.id = "fieldSet" + fieldSetCount++;
    form.insertBefore(ele, document.getElementById('addFieldSetButton'));
}

function removeFieldSet(fieldSet) {
    document.getElementById(fieldSet.id).remove();
}
