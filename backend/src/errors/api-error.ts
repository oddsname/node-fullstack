export class ApiError {
    private code: number;
    private message: string;

    constructor(message: string = 'Something went wrong', code: number = 400) {
        this.code = code;
        this.message = message;
    }

    public getMessage(): string {
        return this.message;
    }

    public getCode(): number {
        return this.code;
    }
}