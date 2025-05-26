"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cone = void 0;
const shape_1 = require("./shape");
class Cone extends shape_1.Shape {
    constructor(id, center, radius, height) {
        super(id);
        this.center = center;
        this.radius = radius;
        this.height = height;
    }
    area() {
        return 0;
    }
    perimetr() {
        return 0;
    }
}
exports.Cone = Cone;
