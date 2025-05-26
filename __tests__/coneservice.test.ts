import { ConeService } from '../src/services/ConeService';
import { Cone } from '../src/entities/cone';
import { Point } from '../src/entities/point';

describe('ConeService', () => {
  const cone = new Cone('c1', new Point(0, 0), 3, 5);

  it('given cone when surfaceArea() then correct', () => {
    const area = ConeService.surfaceArea(cone);
    expect(area).toBeCloseTo(Math.PI * 3 * (3 + Math.hypot(3, 5)));
  });

  it('given cone when volume() then correct', () => {
    expect(ConeService.volume(cone)).toBeCloseTo((1 / 3) * Math.PI * 3 ** 2 * 5);
  });

  it('given cone when perimeter() then circumference of base', () => {
    expect(ConeService.perimeter(cone)).toBeCloseTo(2 * Math.PI * 3);
  });

  it('given cone when area() alias then equals surfaceArea()', () => {
    expect(ConeService.area(cone)).toBeCloseTo(ConeService.surfaceArea(cone));
  });

  it('given cone when sliceVolumeRatio() then correct ratio', () => {
    const ratio = ((5 / 2) / 5) ** 3;
    expect(ConeService.sliceVolumeRatio(cone, 'XY')).toBeCloseTo(ratio / (1 - ratio));
  });
  it('given cone when isBaseOnPlane() then only XY true', () => {
    expect(ConeService.isBaseOnPlane(cone, 'XY')).toBe(true);
    expect(ConeService.isBaseOnPlane(cone, 'XZ')).toBe(false);
    expect(ConeService.isBaseOnPlane(cone, 'YZ')).toBe(false);
  });
});
