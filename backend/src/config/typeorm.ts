import {createConnection, Connection} from "typeorm";
import {env} from "./env";

export const connection = () =>
    createConnection({
        "type": env('DB_TYPE', 'postgres'),
        "host": env('DB_HOST', 'db'),
        "port": env('DB_PORT', '5432'),
        "username": env('DB_USER', 'user'),
        "password": env('DB_PASS', 'root'),
        "database": env('DB_DATABASE', 'test'),
    });