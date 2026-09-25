let MyApp = {};

// Adding functionality to the namespace
MyApp.calculator = {
    add: function (a, b) { // ==> equivalent to function add(a,b) {...};
        return a + b;
    },
    subtract: (a, b) => a - b, // ==> don't put ; after the return value for arrow functions.
                                // ==> don't use  arrow functions in methods, they don't have proper this. functionality.
    // multiply: function (a, b) {
    //     return a * b;
    // }, ==> Can be shortened to below
    multiply (a, b) {
        return a * b;
    },
};

console.log(MyApp.calculator.add);