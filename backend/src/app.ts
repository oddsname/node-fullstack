import express, {Application} from "express";
import {registerRoutes} from './routes';
import {registerConfigs} from "./config";
import {handleErrors} from "./errors";


export function setupApp(url: string, port: string) {
    const app: Application = express();

    registerConfigs(app);

    registerRoutes(app);

    handleErrors(app);

    app.listen(port, () => {
        console.log(`running on ${url}`);
    });
}


