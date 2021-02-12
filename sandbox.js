// Arrays//
var names = ["luigi", "mario"];
names.push("naruto");
// names.push(1); (can't do it names type is string and can't change the type ex. array to string)
// names = 'mario';
// names[0] = true;
var mixed = [10, "ten", true];
mixed.push(10, "lol");
mixed[0] = 20;
//can do it because type in array is mixed
// Objects//
var ninja = {
    name: "mario",
    isDumb: true,
    age: 10
};
ninja.age = 20;
ninja.name = "ryu";
// ninja.name = 20 (can't do it)
// ninja.skills = 'run' (just don't do it there is no skills property in ninja object)
// override ninja object
ninja = {
    name: "yotam",
    isDumb: false,
    age: 5
};
