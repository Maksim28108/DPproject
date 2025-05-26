import type { Shape } from "../entities/shape";
import type { Specification } from "../comparators/comparator";
import type { Comparator } from "../comparators/comparator";


export class ShapeRepository {
    private items = new Map<string, Shape>();

    add(shape: Shape): void {
        this.items.set(shape.id, shape);
    }

    remove(id: string): boolean {
        return this.items.delete(id);
    }

    getById(id: string): Shape | undefined {
        return this.items.get(id);
    }

    getAll(): Shape[] {
        return Array.from(this.items.values());
    }

    find(spec: Specification<Shape>): Shape[] {
    return this.getAll().filter(shape => spec.isSatisfiedBy(shape));
  }

    sort(comparator: Comparator<Shape>): Shape[] {

        return this.getAll().sort((a, b) => comparator.compare(a, b));
    }

}