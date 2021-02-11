// type basics

let character = "luigi";
let age = 10;
let isDumb = true;

// can't do it because it look the variable type
// character = 3

// define param type can do it everywhere
const circ = (diameter: number) => {
	return diameter + Math.PI;
};
console.log(circ(5));
