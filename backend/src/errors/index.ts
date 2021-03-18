import {Application, Request, Response, NextFunction} from "express";
import {ApiError} from "./api-error";
import {ValidationError} from "./validation-error";

export function handleErrors(app: Application) {
    app.use((err: any, req: Request, res: Response, next: NextFunction) => {

        if(err instanceof ApiError) {
            return res.status(err.getCode()).end(err.getMessage());
        }

        if(err instanceof ValidationError) {
            return res.status(err.getCode()).json({
               fieldName: err.getFieldName(),
               message: err.getMessage(),
            });
        }

        return new err;
    });
}