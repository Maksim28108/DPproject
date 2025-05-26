import type { Shape } from '../entities/shape';
import { Cone } from '../entities/cone';
import { Rectangle } from '../entities/rectangle';
import { ConeService } from '../services/ConeService';


export class Warehouse {
  private static instance: Warehouse;
  private metrics = new Map<string, { area: number; perimeter: number; volume?: number }>();

  private constructor() {}

  static getInstance(): Warehouse {
    if (!Warehouse.instance) {
      Warehouse.instance = new Warehouse();
    }
    return Warehouse.instance;
  }

  setMetrics(shape: Shape): void {
    const data: { area: number; perimeter: number; volume?: number } = {
      area: shape.area(),
      perimeter: shape.perimetr(),
    };
    if (shape instanceof Cone) {
      data.volume = ConeService.volume(shape);
    }
    this.metrics.set(shape.id, data);
  }

  getMetrics(id: string): { area: number; perimeter: number; volume?: number } | undefined {
    return this.metrics.get(id);
  }
}