let contentOrder = [
    "introduction",
    "problem-introduction",
    "resulting-tree"
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
document.getElementById('currentContent').innerHTML = document.getElementById(contentOrder[0]).innerHTML;