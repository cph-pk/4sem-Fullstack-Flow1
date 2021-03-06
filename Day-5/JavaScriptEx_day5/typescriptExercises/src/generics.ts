
// a)
function reverseArr<T>(arg: T[]): T[] {
    return arg.reverse();
}


console.log(reverseArr<string>(["a","b","c"]));
console.log(reverseArr<number>([1,2,3]));
console.log(reverseArr<boolean>([true,true,false]));
//console.log(reverseArr<number>(["a","b","c"])); 

//b) Implement a generic Class DataHolder that will allow us to create instances as sketched below:
class DataHolder<T> {
    val: T;
    constructor(val: T) { this.val = val };
    getValue() { return this.val };
    setValue(val: T) { this.val = val };
}

let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

//d.setValue(456); // IS NOT A STRING
//console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());

//d2.setValue("pop"); IS NOT A NUMBER
//console.log(d2.getValue());

// c) Rewrite the example above to user getters and setters instead of the silly getXX and setXX methods
class DataHolder2<T> {
    #val: T
    constructor(val: T) { this.#val = val };
    get val(): T { return this.#val };
    set val(val: T) { this.#val = val };

    toString(): T { return this.#val }
}

let d3 = new DataHolder2<string>("Hello");
console.log(d3.toString());
d3.val = "World2";
console.log(d3.toString());