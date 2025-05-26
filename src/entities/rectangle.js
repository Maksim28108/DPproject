"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(id, p1, p2, p3, p4) {
        super(id);
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        this.p4 = p4;
    }
    area() { /* */ return 0; }
    perimetr() { /* */ return 0; }
}
exports.Rectangle = Rectangle;
