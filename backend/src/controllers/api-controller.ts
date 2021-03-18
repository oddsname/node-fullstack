import {NextFunction, Request, Response} from "express";
import {ApiError} from "../errors/api-error";

class ApiController {
    public index(req: Request, res: Response, next: NextFunction) {

        return next(new ApiError('tes222t'))

    }
}

export const apiController = new ApiController();