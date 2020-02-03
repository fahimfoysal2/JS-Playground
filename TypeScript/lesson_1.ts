/*
* typescript compile => tsc filename
*/

// variable Declaration
let
    a: number = 5, 
    b: string = 'hi',
    c: number[] = [1, 2, 3];

enum Days {Sat=0, Sun=1, Mon=2, Tues=3}

// type assertion
let x,
y = (<string>x).length;

// function
function loop() 
{
    for (let index = 0; index < 5; index++)
    {
        console.log(index);
    }
}   
loop();