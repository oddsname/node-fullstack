import express, {Application, Request, Response, NextFunction} from "express";

export function setupApp(url: string, port: string) {
    const app: Application = express();


    app.listen(port, () => {
        console.log(`running on ${url}`);
    });
}


