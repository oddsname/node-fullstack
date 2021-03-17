import {Application, Router} from "express";

import { apiRoutes } from "./api-routes";

export function registerRoutes(app: Application) {
    const router = Router();

    router.use('/api', apiRoutes(router))

    app.use('/', router);
}