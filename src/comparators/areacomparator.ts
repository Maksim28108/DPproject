import { Comparator } from "./comparator";
import { Shape } from "../entities/shape";

export class AreaComparator implements Comparator<Shape>{
    compare(a: Shape, b: Shape): number {
        return a.area() - b.area();
    }
}