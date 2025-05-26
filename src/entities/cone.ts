// import { Shape } from "./shape";
// import { Point } from "./point";
// import { ConeService } from "../services/ConeService";

// export class Cone extends Shape {
//     constructor(
//         id: string,
//         public center: Point,
//         public radius: number,
//         public height: number,
//     ){
//         super(id);
//     }

//     area(): number {
//         return ConeService.area(this);
//       }
//       perimetr(): number {
//         return ConeService.perimeter(this);
//       }

//     getPoints(): Point[] {
//     return [this.center];
//   }
// }

import { Shape } from './shape';
import type { Point } from './point';
import { ConeService } from '../services/ConeService';
import { Warehouse } from '../warehouse/warehouse';

export class Cone extends Shape {
  private _radius: number;
  private _height: number;

  constructor(
    id: string,
    public center: Point,
    radius: number,
    height: number
  ) {
    super(id);
    this._radius = radius;
    this._height = height;

    const wh = Warehouse.getInstance();
    this.attach(wh.setMetrics.bind(wh));
    wh.setMetrics(this);
  }

  get radius(): number { return this._radius; }
  set radius(r: number) {
    this._radius = r;
    this.notify();
  }

  get height(): number { return this._height; }
  set height(h: number) {
    this._height = h;
    this.notify();
  }

  area(): number {
    return ConeService.area(this);
  }

  perimetr(): number {
    return ConeService.perimeter(this);
  }

  getPoints(): Point[] {
    return [this.center];
  }

  volume(): number {
    return ConeService.volume(this);
  }
}
