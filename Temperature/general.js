"use strict";

let contentOrder = [
    // "introduction",
    // "library-introduction",
    // "problem-introduction",
    // "create-tree",
    "evaluate-tree",
    "resulting-tree",
    "test-tree"
];

let i = 0;

function changeContent(increment) {
    i += increment;
    if (i < 0) {
        i = 0;
    }
    else if (i > contentOrder.length - 1) {
        i = contentOrder.length - 1;
    }
    document.getElementById('currentContent').innerHTML = document.getElementById(contentOrder[i]).innerHTML;
}

// Recursive (DFS) function for displaying inner structure of decision tree
function treeToHtml(tree) {
    // only leafs containing category
    if (tree.category) {
        return ['<ul>',
            '<li>',
            '<a href="#">',
            '<b>', tree.category, '</b>',
            '</a>',
            '</li>',
            '</ul>'].join('');
    }

    return ['<ul>',
        '<li>',
        '<a href="#">',
        '<b>', tree.attribute, ' ', tree.predicateName, ' ', tree.pivot, ' ?</b>',
        '</a>',
        '<ul>',
        '<li>',
        '<a href="#">Yes</a>',
        treeToHtml(tree.match),
        '</li>',
        '<li>',
        '<a href="#">No</a>',
        treeToHtml(tree.notMatch),
        '</li>',
        '</ul>',
        '</li>',
        '</ul>'].join('');
}

document.getElementById('currentContent').innerHTML = document.getElementById(contentOrder[0]).innerHTML;

document.getElementById('displayTreeResults').innerHTML = treeToHtml(decisionTree.root);

document.getElementById('exampleEvaluation').innerText = evaluateTree(decisionTree);
