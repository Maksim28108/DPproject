import { RectangleService } from '../src/services/RectangleService';
import { Rectangle } from '../src/entities/rectangle';
import { Point } from '../src/entities/point';

describe('RectangleService', () => {
  it('given a 4×3 rectangle when area() then returns 12', () => {
    const rect = new Rectangle(
      'r1',
      new Point(0, 0),
      new Point(4, 0),
      new Point(4, 3),
      new Point(0, 3),
    );

    const area = RectangleService.area(rect);
    const perimeter = RectangleService.perimeter(rect);

    expect(area).toBeCloseTo(12);
    expect(perimeter).toBeCloseTo(14);
  });

  it('given a square when isSquare() then returns true, and isTrapezoid false', () => {
    const sq = new Rectangle(
      'sq1',
      new Point(0, 0),
      new Point(2, 0),
      new Point(2, 2),
      new Point(0, 2),
    );

    const isSquare = RectangleService.isSquare(sq);
    const isTrapezoid = RectangleService.isTrapezoid(sq);

    expect(isSquare).toBe(true);
    expect(isTrapezoid).toBe(false);
  });

  it('given a trapezoid when isTrapezoid() then returns true', () => {
    const trap = new Rectangle(
      't1',
      new Point(0, 0),
      new Point(4, 0),
      new Point(3, 2),
      new Point(1, 2),
    );

    const isTrap = RectangleService.isTrapezoid(trap);

    expect(isTrap).toBe(true);
  });
});
