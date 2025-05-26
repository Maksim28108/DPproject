
import { ValidationError } from "../errors/validateErrors";
import { Point } from "../entities/point";
import { Cone } from "../entities/cone";
import { PointValidator } from './pointvalidator';


export class ConeValidator {
  private static readonly NUM_RE = /^[+-]?\d+(\.\d+)?$/;

  private readonly pv = new PointValidator();

  public validate(data: any[]): Cone {
    if (data.length !== 4) {
      throw new ValidationError(
        "WRONG_PARAM_COUNT",
        "Cone requires 4 parameters: x y radius height"
      );
    }

    const [xs, ys, rs, hs] = data;

    const center: Point = this.pv.validate([xs, ys]);

    if (!ConeValidator.NUM_RE.test(rs) || parseFloat(rs) <= 0) {
      throw new ValidationError(
        "INVALID_RADIUS",
        "Radius must be a positive number"
      );
    }
    const radius = parseFloat(rs);

    if (!ConeValidator.NUM_RE.test(hs) || parseFloat(hs) <= 0) {
      throw new ValidationError(
        "INVALID_HEIGHT",
        "Height must be a positive number"
      );
    }
    const height = parseFloat(hs);

    return new Cone("", center, radius, height);
  }
}
