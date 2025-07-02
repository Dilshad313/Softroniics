let resultScreen = document.getElementById("screen");

function addToScreen(value) {
    resultScreen.value += value;
}

function clearScreen() {
    resultScreen.value = "";
}

function calculate() {
    resultScreen.value = eval(resultScreen.value);
}