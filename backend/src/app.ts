import express, {Application} from "express";
import { registerRoutes } from './routes';
import { registerConfigs } from "./config";


export function setupApp(url: string, port: string) {
    const app: Application = express();

    registerConfigs(app);
    registerRoutes(app);

    app.listen(port, () => {
        console.log(`running on ${url}`);
    });
}


