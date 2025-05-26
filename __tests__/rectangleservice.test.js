"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RectangleService_1 = require("../src/services/RectangleService");
const rectangle_1 = require("../src/entities/rectangle");
const point_1 = require("../src/entities/point");
describe('RectangleService', () => {
    it('given a 4×3 rectangle when area() then returns 12', () => {
        const rect = new rectangle_1.Rectangle('r1', new point_1.Point(0, 0), new point_1.Point(4, 0), new point_1.Point(4, 3), new point_1.Point(0, 3));
        const area = RectangleService_1.RectangleService.area(rect);
        const perimeter = RectangleService_1.RectangleService.perimeter(rect);
        expect(area).toBeCloseTo(12);
        expect(perimeter).toBeCloseTo(14);
    });
    it('given a square when isSquare() then returns true, and isTrapezoid false', () => {
        const sq = new rectangle_1.Rectangle('sq1', new point_1.Point(0, 0), new point_1.Point(2, 0), new point_1.Point(2, 2), new point_1.Point(0, 2));
        const isSquare = RectangleService_1.RectangleService.isSquare(sq);
        const isTrapezoid = RectangleService_1.RectangleService.isTrapezoid(sq);
        expect(isSquare).toBe(true);
        expect(isTrapezoid).toBe(false);
    });
    it('given a trapezoid when isTrapezoid() then returns true', () => {
        const trap = new rectangle_1.Rectangle('t1', new point_1.Point(0, 0), new point_1.Point(4, 0), new point_1.Point(3, 2), new point_1.Point(1, 2));
        const isTrap = RectangleService_1.RectangleService.isTrapezoid(trap);
        expect(isTrap).toBe(true);
    });
});
