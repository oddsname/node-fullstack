import {Application, json} from "express";
import {connectDB} from "./typeorm";
import "reflect-metadata";

export function registerConfigs(app: Application) {

    app.use(json());

    connectDB()
        .then(() => console.log('connected TypeOrm'))
        .catch((err) => console.log(err.getMessage()))
}
