"use strict";
// A)
class Shape {
    constructor(color) {
        this._color = color;
    }
    get color() { return this._color; }
    set color(color) { this._color = color; }
    toString() { return `Color: ${this.color}, Area: ${this.area}, Perimeter: ${this.perimeter}`; } // , Area: ${this.area}, Perimeter: ${this.perimeter}
}
// let s = new Shape("red"); You can't make an instance of an abstract class
// B) Create a new class Circle that should extend the Shape class.
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this._radius = radius;
    }
    get area() { return Math.PI * Math.pow(this.radius, 2); }
    ;
    get perimeter() { return 2 * this.radius * Math.PI; }
    ;
    get radius() { return this._radius; }
    set radius(radius) { this._radius = radius; }
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
    constructor(radius, color, height) {
        super(radius, color);
        this._height = height;
    }
    //get perimeter(): number { throw new Error("not implemented") };
    get getVolume() { return Math.PI * Math.pow(super.area, 2) * this.height; }
    get height() { return this._height; }
    set height(height) { this._height = height; }
}
let cy = new Cylinder(6, "blue", 12);
console.log(cy.toString());
console.log("Volume: " + cy.getVolume);
//# sourceMappingURL=classesAndInheritance.js.map