export abstract class Shape {
    constructor(public id: string){}
    abstract area(): number;
    abstract perimetr(): number;
}