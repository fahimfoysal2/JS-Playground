// arrow function
let x = (param) => console.log(param + param);
x("hew");

// interface
interface MyInterface
{
    a, 
    b;
}

let y = (z:MyInterface) =>
{
    console.log("First: " + z.a + ", Second: " + z.b);
}

y({a:1, b:'fahim'});
y({a:2, b:4});
