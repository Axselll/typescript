"use strict";
// DOM & Type Casting
// put (! on query selector) ex. querySelector("a")!  so you dont need to use ? like ex below
// if you use ? it mean a can be null or not exist in HTMLElement
var anchor = document.querySelector("a");
// console.log(anchor?.href);
// const form = document.querySelector("form")!;
// if using 'as' take off (!) mark because it's never gonna be null
var form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
