
import { ValidationError } from "../errors/validateErrors";
import { Point } from "../entities/point";
import { Rectangle } from "../entities/rectangle";
import { PointValidator } from "./pointvalidator";


export class RectangleValidator {
  private readonly pv = new PointValidator();

  public validate(data: any[]): Rectangle {

    if (data.length !== 8) {
      throw new ValidationError(
        "WRONG_PARAM_COUNT",
        "Rectangle requires 8 parameters (4 points)"
      );
    }

    const pts: Point[] = [];
    for (let i = 0; i < 4; i++) {
      const slice = data.slice(i * 2, i * 2 + 2);
      pts.push(this.pv.validate(slice)); 
    }
    const [p1, p2, p3, p4] = pts;

    const v12 = { x: p2.x - p1.x, y: p2.y - p1.y };
    const v23 = { x: p3.x - p2.x, y: p3.y - p2.y };
    const v34 = { x: p4.x - p3.x, y: p4.y - p3.y };
    const v41 = { x: p1.x - p4.x, y: p1.y - p4.y };

    const dot = (a: { x: number; y: number }, b: { x: number; y: number }) =>
      a.x * b.x + a.y * b.y;
    const cross = (a: { x: number; y: number }, b: { x: number; y: number }) =>
      a.x * b.y - a.y * b.x;
    const isZeroVec = (v: { x: number; y: number }) =>
      Math.hypot(v.x, v.y) < 1e-8;

    if (
      isZeroVec(v12) ||
      isZeroVec(v23) ||
      isZeroVec(v34) ||
      isZeroVec(v41)
    ) {
      throw new ValidationError(
        "INVALID_SHAPE",
        "All rectangle sides must have positive length"
      );
    }

    if (Math.abs(dot(v12, v23)) > 1e-6) {
      throw new ValidationError(
        "NOT_RECTANGLE",
        "Adjacent sides are not perpendicular"
      );
    }

    if (Math.abs(cross(v12, v34)) > 1e-6 || Math.abs(cross(v23, v41)) > 1e-6) {
      throw new ValidationError(
        "NOT_RECTANGLE",
        "Opposite sides are not parallel"
      );
    }

    return new Rectangle("", p1, p2, p3, p4);
  }
}
