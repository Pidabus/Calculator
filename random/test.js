let MyApp = {};

// Adding functionality to the namespace
MyApp.calculator = {
    add: function (a, b) { // ==> equivalent to function add(a,b) {...};
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

console.log(MyApp.calculator.add);