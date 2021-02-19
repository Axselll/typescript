"use strict";
var greet;
greet = function () {
    console.log("hello again");
};
// use question mark ( ? ) if thers is no default value for optional paramater [c?]
// void is a complete lack of any value
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
// pass third param to overwrite default value
add(1, 2);
// add(1, 2, 3);
// explicitly declare the return type of the number put :number or etc behind parantheses
var minus = function (a, b) {
    return a + b;
};
var res = minus(10, 1);
// dont ever try it
// res = "";
