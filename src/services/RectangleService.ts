import { Rectangle } from "../entities/rectangle";

export class RectangleService {
  public static area(rect: Rectangle): number {

    const dx1 = rect.p2.x - rect.p1.x;
    const dy1 = rect.p2.y - rect.p1.y;
    const a = Math.hypot(dx1, dy1);


    const dx2 = rect.p3.x - rect.p2.x;
    const dy2 = rect.p3.y - rect.p2.y;
    const b = Math.hypot(dx2, dy2);

    return a * b;
  }

  public static perimeter(rect: Rectangle): number {
    const sideA = this._distance(rect.p1, rect.p2);
    const sideB = this._distance(rect.p2, rect.p3);
    return 2 * (sideA + sideB);
  }

  public static isSquare(rect: Rectangle): boolean {
    const a2 = this._distanceSquared(rect.p1, rect.p2);
    const b2 = this._distanceSquared(rect.p2, rect.p3);
    return Math.abs(a2 - b2) < 1e-6;
  }

  public static isTrapezoid(rect: Rectangle): boolean {
    const v12 = this._vector(rect.p1, rect.p2);
    const v23 = this._vector(rect.p2, rect.p3);
    const v34 = this._vector(rect.p3, rect.p4);
    const v41 = this._vector(rect.p4, rect.p1);

    const parallel12_34 = Math.abs(v12.x * v34.y - v12.y * v34.x) < 1e-6;
    const parallel23_41 = Math.abs(v23.x * v41.y - v23.y * v41.x) < 1e-6;

    return (parallel12_34 && !parallel23_41) || (!parallel12_34 && parallel23_41);
  }

  private static _distance(a: { x: number; y: number }, b: { x: number; y: number }) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  private static _distanceSquared(a: { x: number; y: number }, b: { x: number; y: number }) {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return dx * dx + dy * dy;
  }

  private static _vector(a: { x: number; y: number }, b: { x: number; y: number }) {
    return { x: b.x - a.x, y: b.y - a.y };
  }
}
