const me = {
    name: "accel",
    age: 21,
    speak(language) {
        console.log(language);
    },
    spend(money) {
        console.log(`I Spent ${money}`);
        return money;
    },
};
console.log(me);
const greetPeron = (person) => {
    console.log(`hello ${person.name}`);
};
// strict usage, same structure with the interface is a must
greetPeron(me);
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mario", "work for the website", 100);
const invTwo = new Invoice("luigi", "work for the website", 200);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
