import { Comparator } from "./comparator";
import { Shape } from "../entities/shape";


export class idcomparator implements Comparator<Shape>{
    compare(a: Shape, b: Shape): number {
        return a.id.localeCompare(b.id);
    }
}