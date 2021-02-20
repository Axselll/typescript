"use strict";
// Function signature
// let greet = Function;
// ex.1
var greet;
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// ex.2
var calc;
calc = function (n1, n2, act) {
    if (act === "add") {
        return n1 + n2;
    }
    else {
        return n1 - n2;
    }
};
// ex.3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
