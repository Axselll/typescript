let greet: Function;

greet = () => {
	console.log("hello again");
};

// use question mark ( ? ) if thers is no default value for optional paramater [c?]
// void is a complete lack of any value
const add = (a: number, b: number, c: number | string = 10): void => {
	console.log(a + b);
	console.log(c);
};

// pass third param to overwrite default value
add(1, 2);
// add(1, 2, 3);

// explicitly declare the return type of the number put :number or etc behind parantheses
const minus = (a: number, b: number): number => {
	return a + b;
};

let res = minus(10, 1);

// dont ever try it
// res = "";
