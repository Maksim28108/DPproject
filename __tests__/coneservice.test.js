"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConeService_1 = require("../src/services/ConeService");
const cone_1 = require("../src/entities/cone");
const point_1 = require("../src/entities/point");
describe('ConeService extras', () => {
    const cone = new cone_1.Cone('c1', new point_1.Point(0, 0), 3, 5);
    it('given cone when sliceVolumeRatio() then correct ratio', () => {
        const ratio = ((5 / 2) / 5) ** 3;
        expect(ConeService_1.ConeService.sliceVolumeRatio(cone, 'XY')).toBeCloseTo(ratio / (1 - ratio));
    });
    it('given cone when isBaseOnPlane() then only XY true', () => {
        expect(ConeService_1.ConeService.isBaseOnPlane(cone, 'XY')).toBe(true);
        expect(ConeService_1.ConeService.isBaseOnPlane(cone, 'XZ')).toBe(false);
        expect(ConeService_1.ConeService.isBaseOnPlane(cone, 'YZ')).toBe(false);
    });
});
