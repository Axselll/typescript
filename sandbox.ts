// any type (USE WITH CAUTION)

// can change in the future
let age: any = 5;

// now age is boolean
age = true;

let mixed: any[] = [];

mixed.push("mario", 1);

let ninja: {
	name: any;
	age: any;
};

ninja = {
	name: "luigi",
	age: 1,
};
