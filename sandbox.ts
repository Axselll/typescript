// explicit types
let char: string;
let age: number;
let isDumb: boolean;

// age = "lala"; (don't even try do that lmao)
age = 12;

// arrays
// array of string and initialize it as an empty array
let ninjas: string[] = [];
ninjas.push("mario");

// union types
// let user to define more than 1 type below only can store string and number
let mixed: (string | number)[] = [];
mixed.push("luigi", 10);

// don't need a parentheses if declare union type on a normal variable
let uid: string | number;
uid = 123;
uid = "lala";

// objects
let ninjaOne: object;
ninjaOne = {
	name: "mario",
	age: 12,
};
// can do this because an array is a some kinda an object
ninjaOne = [];

// more specific
let ninjaTwo: {
	name: string;
	age: number;
	isDumb: boolean;
};

ninjaTwo = {
	name: "mario",
	age: 10,
	isDumb: false,
};
