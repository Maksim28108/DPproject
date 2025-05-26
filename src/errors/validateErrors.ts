export class ValidationError extends Error {
    constructor(public code: string, public message: string){
        super(message);
        this.name = 'ValidationError';
    }
}