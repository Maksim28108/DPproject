
import { ValidationError } from '../errors/validateErrors';
import { Point } from '../entities/point';

export class PointValidator {
  private static NUM = /^[-+]?\d+(\.\d+)?$/;

  validate(data: any[]): Point {
    const [xs, ys, zs] = data;

    if (!PointValidator.NUM.test(xs) || !PointValidator.NUM.test(ys)) {
      throw new ValidationError('INVALID_NUMBER', 'Coordinates must be numbers');
    }

    return new Point(
      parseFloat(xs),
      parseFloat(ys),
      zs !== undefined ? parseFloat(zs) : 0
    );
  }
}