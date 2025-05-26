"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConeValidator = void 0;
const validateErrors_1 = require("../errors/validateErrors");
const cone_1 = require("../entities/cone");
const pointvalidator_1 = require("./pointvalidator");
class ConeValidator {
    constructor() {
        this.pv = new pointvalidator_1.PointValidator();
    }
    validate(data) {
        if (data.length !== 4) {
            throw new validateErrors_1.ValidationError("WRONG_PARAM_COUNT", "Cone requires 4 parameters: x y radius height");
        }
        const [xs, ys, rs, hs] = data;
        const center = this.pv.validate([xs, ys]);
        if (!ConeValidator.NUM_RE.test(rs) || parseFloat(rs) <= 0) {
            throw new validateErrors_1.ValidationError("INVALID_RADIUS", "Radius must be a positive number");
        }
        const radius = parseFloat(rs);
        if (!ConeValidator.NUM_RE.test(hs) || parseFloat(hs) <= 0) {
            throw new validateErrors_1.ValidationError("INVALID_HEIGHT", "Height must be a positive number");
        }
        const height = parseFloat(hs);
        return new cone_1.Cone("", center, radius, height);
    }
}
exports.ConeValidator = ConeValidator;
ConeValidator.NUM_RE = /^[+-]?\d+(\.\d+)?$/;
