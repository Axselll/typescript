"use strict";
//  Classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
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
console.log(invoices);
