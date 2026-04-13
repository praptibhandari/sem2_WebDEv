
const displayElement = document.querySelector(".display");
const subButton = document.querySelector(".sub");
const resetButton = document.querySelector(".reset");
const addButton = document.querySelector(".add");


const counter = {
    value: 0
};


function updateDisplay() {
    displayElement.textContent = counter.value;
}


function sub() {
    counter.value -= 1;
    updateDisplay();
}
 

function reset() {
    counter.value = 0;
    updateDisplay();
}

function add() {
    counter.value += 1;
    updateDisplay();
}


subButton.addEventListener("click", sub);
resetButton.addEventListener("click", reset);
addButton.addEventListener("click", add);


updateDisplay();