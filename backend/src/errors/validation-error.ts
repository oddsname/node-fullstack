export class ValidationError {
    private fieldName: string;
    private message: string;
    private code: number = 422;

    constructor(fieldName: string, message: string = 'Invalid Data') {
        this.fieldName = fieldName;
        this.message = message;
    }

    public getFieldName(): string {
        return this.fieldName;
    }

    public getMessage(): string {
        return this.message;
    }

    public getCode(): number {
        return this.code;
    }
}