// Generic interface

interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}

let returnString: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}


// Generic interface as a function type

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error


// Generic interface as a class type

interface ProcessIdentity1<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity1<X, Y> implements ProcessIdentity1<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor1 = new processIdentity1<number, string>(100, 'Hello');
processor1.process();           // Displays 'Hello'
// processor1.value = '100';       // Type check error


// Generic class

class processIdentity2<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor2 = new processIdentity2<number, string>(100, 'Hello');
processor2.getIdentity();      // Displays 'Hello'