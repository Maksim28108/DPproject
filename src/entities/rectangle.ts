import { Shape } from "./shape";
import { Point } from "./point";
import { RectangleService } from '../services/RectangleService';
import { Warehouse } from "../warehouse/warehouse";

export class Rectangle extends Shape {
    constructor(
        id: string,
        public p1: Point,
        public p2: Point,
        public p3: Point,
        public p4: Point,
    ){
        super(id);
        const wh = Warehouse.getInstance();
        this.attach(wh.setMetrics.bind(wh));
        wh.setMetrics(this);
    }

    area(): number {
    return RectangleService.area(this);
  }
  perimetr(): number {
    return RectangleService.perimeter(this);
  }

  getPoints(): Point[] {
    return [this.p1, this.p2, this.p3, this.p4];
  }
}