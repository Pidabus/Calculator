let MyApp = {};

// Adding functionality to the namespace
MyApp.calculator = {
    add: function (a, b) { // ==> equivalent to function add(a,b) {...};
        return a + b;
    },
    subtract: (a, b) => a - b, // ==> don't put ; after the return value for arrow functions.
};

console.log(MyApp.calculator.add);