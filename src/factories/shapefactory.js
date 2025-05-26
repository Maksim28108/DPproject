"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeFactory = void 0;
const rectanglevalidator_1 = require("../validators/rectanglevalidator");
const conevalidator_1 = require("../validators/conevalidator");
const validateErrors_1 = require("../errors/validateErrors");
class ShapeFactory {
    static create(type, id, params) {
        switch (type.toLowerCase()) {
            case "rectangle": {
                const rect = new rectanglevalidator_1.RectangleValidator().validate(params);
                rect.id = id;
                return rect;
            }
            case "cone": {
                const cone = new conevalidator_1.ConeValidator().validate(params);
                cone.id = id;
                return cone;
            }
            default:
                throw new validateErrors_1.ValidationError("UNKNOWN_SHAPE", `Shape type "${type}" is not supported`);
        }
    }
}
exports.ShapeFactory = ShapeFactory;
