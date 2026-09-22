function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculator() {

    let var1 = null;
    let var2 = null;
    let operator = null;

    function operate(operator, var1, var2) {
        return operator(var1, var2);
    }

    const inputs = document.querySelector(".inputs");
    const display = document.querySelector(".display");
    const clearButton = document.querySelector(".button");
    const inputs_operators = document.querySelector(".operators");
    const equalButton = document.querySelector(".equals");

    inputs.addEventListener("click", (e) => {
        if(display.textContent != "") {
            display.textContent = "";
        }

        let text = e.target.textContent;

        display.textContent += text;

    })

    inputs_operators.addEventListener("click", (e) => {
        let operand = e.target.textContent;

        var1 = display.textContent;
        operator = operand;

        display.textContent += " " + operand + " ";
    })

    clearButton.addEventListener("click", (e) => {
        display.textContent = "";
    })

};

calculator();