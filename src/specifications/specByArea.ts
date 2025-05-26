import { Specification } from "../comparators/comparator";
import type { Shape } from '../entities/shape';


export class AreaRangeSpec implements Specification<Shape> {
    constructor(private min: number, private max: number) {}
    isSatisfiedBy(shape: Shape): boolean {
        const a = shape.area();
        return a >= this.min && a <= this.max;
    }    
}
