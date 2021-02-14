// explicit types
var char;
var age;
var isDumb;
// age = "lala"; (don't even try do that lmao)
age = 12;
// arrays
// array of string and initialize it as an empty array
var ninjas = [];
ninjas.push("mario");
// union types
// let user to define more than 1 type below only can store string and number
var mixed = [];
mixed.push("luigi", 10);
// don't need a parentheses if declare union type on a normal variable
var uid;
uid = 123;
uid = "lala";
// objects
var ninjaOne;
ninjaOne = {
    name: "mario",
    age: 12
};
// can do this because an array is a some kinda an object
ninjaOne = [];
// more specific
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 10,
    isDumb: false
};
