import {Router, Response, Request, NextFunction} from 'express'

export function apiRoutes(router: Router): Router {
    router.get('/test', (req: Request, res: Response) => {
        res.send('test');
    });

    return router;
}