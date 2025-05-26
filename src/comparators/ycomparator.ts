import { Comparator } from "./comparator";
import { Rectangle } from "../entities/rectangle";

export class Ycomparator implements Comparator<Rectangle>{
    compare(a: Rectangle, b: Rectangle): number {
        return a.p1.y - b.p1.y;
    }
}