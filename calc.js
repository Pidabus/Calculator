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