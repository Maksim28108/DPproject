export abstract class BaseValidator<T> {
    abstract validate(data: any): T
}