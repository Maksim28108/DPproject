import { Rectangle } from "../entities/rectangle";
import { Cone } from "../entities/cone";
import { RectangleValidator } from "../validators/rectanglevalidator";
import { ConeValidator } from "../validators/conevalidator";
import { ValidationError } from "../errors/validateErrors";

type Shape = Rectangle | Cone;

export class ShapeFactory {
  public static create(type: string, id: string, params: string[]): Shape {
    switch (type.toLowerCase()) {
      case "rectangle": {
        const rect = new RectangleValidator().validate(params);
        rect.id = id;
        return rect;
      }
      case "cone": {
        const cone = new ConeValidator().validate(params);
        cone.id = id;
        return cone;
      }
      default:
        throw new ValidationError(
          "UNKNOWN_SHAPE",
          `Shape type "${type}" is not supported`
        );
    }
  }
}
