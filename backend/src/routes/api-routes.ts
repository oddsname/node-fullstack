import {Router, Response, Request, NextFunction} from 'express'
import {apiController} from "../controllers/api-controller";


export function apiRoutes(router: Router): Router {
    router.get('/test', apiController.index);

    return router;
}