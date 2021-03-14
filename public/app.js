"use strict";
//  Classes
var Invoice = /** @class */ (function () {
    // client: string;
    // details: string;
    // amount: number;
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        // this.client = c;
        // this.details = d;
        // this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3 " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work for the website", 100);
var invTwo = new Invoice("luigi", "work for the website", 200);
var invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
