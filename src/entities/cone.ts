import { Shape } from "./shape";
import { Point } from "./point";
import { ConeService } from "../services/ConeService";

export class Cone extends Shape {
    constructor(
        id: string,
        public center: Point,
        public radius: number,
        public height: number,
    ){
        super(id);
    }

    area(): number {
        return ConeService.area(this);
      }
      perimetr(): number {
        return ConeService.perimeter(this);
      }
}