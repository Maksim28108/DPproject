import { Comparator } from "./comparator";
import { Rectangle } from "../entities/rectangle";

export class Xcomparator implements Comparator<Rectangle>{
    compare(a: Rectangle, b: Rectangle): number {
        return a.p1.x - b.p1.x;
    }
}