// Interfaces
interface isPerson {
	name: string;
	age: number;
	speak(language: string): void;
	spend(money: number): number;
}

const me: isPerson = {
	name: "accel",
	age: 21,
	speak(language: string): void {
		console.log(language);
	},
	spend(money: number): number {
		console.log(`I Spent ${money}`);
		return money;
	},
};

console.log(me);

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work for the website", 100);
const invTwo = new Invoice("luigi", "work for the website", 200);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach((inv) => {
	console.log(inv.client, inv.amount, inv.format());
});
