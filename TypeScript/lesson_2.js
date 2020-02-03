// arrow function
var x = function (param) { return console.log(param + param); };
x("hew");
var y = function (z) {
    console.log("First: " + z.a + ", Second: " + z.b);
};
y({ a: 1, b: 'fahim' });
y({ a: 2, b: 4 });
