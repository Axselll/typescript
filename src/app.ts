// DOM & Type Casting

// put (! on query selector) ex. querySelector("a")!  so you dont need to use ? like ex below
// if you use ? it mean a can be null or not exist in HTMLElement
const anchor = document.querySelector("a");
// console.log(anchor?.href);

// const form = document.querySelector("form")!;
// if using 'as' take off (!) mark because it's never gonna be null
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
