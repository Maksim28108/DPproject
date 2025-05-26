"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointValidator = void 0;
const validateErrors_1 = require("../errors/validateErrors");
const point_1 = require("../entities/point");
class PointValidator {
    validate(data) {
        const [xs, ys, zs] = data;
        if (!PointValidator.NUM.test(xs) || !PointValidator.NUM.test(ys)) {
            throw new validateErrors_1.ValidationError('INVALID_NUMBER', 'Coordinates must be numbers');
        }
        return new point_1.Point(parseFloat(xs), parseFloat(ys), zs !== undefined ? parseFloat(zs) : 0);
    }
}
exports.PointValidator = PointValidator;
PointValidator.NUM = /^[-+]?\d+(\.\d+)?$/;
