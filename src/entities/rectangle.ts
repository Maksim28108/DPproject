import { Shape } from "./shape";
import { Point } from "./point";
import { RectangleService } from '../services/RectangleService';

export class Rectangle extends Shape {
    constructor(
        id: string,
        public p1: Point,
        public p2: Point,
        public p3: Point,
        public p4: Point,
    ){
        super(id)
    }

    area(): number {
    return RectangleService.area(this);
  }
  perimetr(): number {
    return RectangleService.perimeter(this);
  }
}