import { Point } from "./point";
export abstract class Shape {
    private observers: ((shape: Shape) => void)[] = [];

    constructor(public id: string){}

    abstract area(): number;
    abstract perimetr(): number;
    abstract getPoints(): Point[];

    attach(fn: (shape: Shape) => void): void {
    this.observers.push(fn);
  }

  protected notify(): void {
    this.observers.forEach(fn => fn(this));
  }
}