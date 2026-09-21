function add (a, b) {
   return a + b; 
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a/b;
}

let var1 = null;
let var2 = null;
let operator = null;

function operate (operator, var1, var2) {
    return operator(var1, var2);
}

const inputs = document.querySelector(".inputs");
const display = document.querySelector(".display");

inputs.addEventListener("click", (e) => {
    let value = e.target.textContent;

    if (value === CLEAR) {
        display.textContent = "";
    }

    display.textContent = value;
})