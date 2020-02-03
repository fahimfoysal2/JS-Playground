// Class -> Module using 'export'

export class MyClass{
    constructor(private _a: number, private _b: number){
    }
    
    set a(v : number) {
        this._a = v;
    }
    
    set b(v : number) {
        this._b = v;
    }
    
    add() {
        console.log("Add: " + (this._a + this._b));
    }

    subtract() {
        console.log("Subtract: " + (this._a - this._b));
    }
}

let x = new MyClass(1,2);
x.add();
x.subtract();

x.a = 10;
x.b = 5;
x.add();
x.subtract();