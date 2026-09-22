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
    if (b===0) {
        alert("MATH ERROR");
        return "";
    }
    return a / b;
}

function verifyResult (result) {
    if (typeof result === "string") {
        alert("MATH ERROR!");
    }
    if (result % 1 === 0) {
        result.toFixed(1);
    }
    return result;
}

function calculator() {

    let var1 = null;
    let var2 = null;
    let operator = null;

    const inputs = document.querySelector(".inputs");
    const display = document.querySelector(".display");
    const clearButton = document.querySelector(".button");
    const inputs_operators = document.querySelector(".operators");
    const equalButton = document.querySelector(".equal");

    function operate(operator, var1, var2) {
        switch (operator) {
            case "+":
                return add(var1, var2);
                break;
            case "-":
                return subtract(var1, var2);
                break;
            case "x":
                return multiply(var1, var2);
                break;
            case "/":
                return divide(var1, var2);
                break;
        }
    }

    inputs.addEventListener("click", (e) => { 
        if (e.target.tagName != "BUTTON") return;

        let text = e.target.textContent;

        display.textContent += text;

    });

    inputs_operators.addEventListener("click", (e) => {
        if (e.target.tagName != "BUTTON") return;

        let operand = e.target.textContent;

        var1 = Number(display.textContent);
        operator = operand;

        display.textContent = "";
    });

    equalButton.addEventListener("click", (e) => {
        let text = display.textContent;

        var2 = Number(text);

        display.textContent = "";

        let result = operate(operator, var1, var2);

        display.textContent = result.toFixed(1);

    });
    
    clearButton.addEventListener("click", (e) => {
        display.textContent = "";
        var1 = null;
        var2 = null;
        operator = null;
    });

}
calculator();