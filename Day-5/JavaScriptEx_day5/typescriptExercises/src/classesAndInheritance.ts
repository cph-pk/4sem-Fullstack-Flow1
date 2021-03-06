
// A)

abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    get color(): string { return this._color }
    set color(color: string) { this._color = color }

    toString(): string { return `Color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}` } // , Area: ${this.area}, Perimeter: ${this.perimeter}
}

// let s = new Shape("red"); You can't make an instance of an abstract class

// B) Create a new class Circle that should extend the Shape class.

class Circle extends Shape {
    private _radius: number;
    constructor(radius: number, color: string) {
        super(color)
        this._radius = radius;
    }
    get area(): number { return Math.PI * Math.pow(this.radius, 2) };
    get perimeter(): any { return 2 * this.radius * Math.PI };

    get radius(): number { return this._radius }
    set radius(radius: number) { this._radius = radius }
}


let c1 = new Circle(5, "red");
console.log(c1.toString());

console.log(c1.area);
console.log(c1.perimeter);
console.log(c1.radius);
c1.radius = 12;
console.log(c1.radius);

// C) Create a new class Cylinder (agreed, definitely not a perfect inheritance example) that should extend the Circle class.

class Cylinder extends Circle {
    private _height: number;
    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }
    get perimeter(): Error { return new Error("not implemented") };

    get getVolume(): number { return Math.PI * Math.pow(super.area, 2) * this.height }

    get height(): number { return this._height }
    set height(height: number) { this._height = height }
}

let cy = new Cylinder(6, "blue", 12);
console.log(cy.toString());

console.log("Volume: " + cy.getVolume);