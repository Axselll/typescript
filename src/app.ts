//  Classes
class Invoice {
	client: string;
	details: string;
	amount: number;

	constructor(c: string, d: string, a: number) {
		this.client = c;
		this.details = d;
		this.amount = a;
	}

	format() {
		return `${this.client} owes £ ${this.amount} for ${this.details}`;
	}
}

const invOne = new Invoice("mario", "work for the website", 100);
const invTwo = new Invoice("luigi", "work for the website", 200);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
console.log(invoices);
