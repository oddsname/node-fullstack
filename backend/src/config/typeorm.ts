import {createConnection, Connection} from "typeorm";
import {env} from "./env";
import {User} from "../entities/User";

export const connectDB = () =>
    createConnection({
        synchronize: true,
        entities: [User],
        "type": env('DB_TYPE', 'postgres'),
        "host": env('DB_HOST', 'db'),
        "port": env('DB_PORT', '5432'),
        "username": env('DB_USER', 'user'),
        "password": env('DB_PASS', 'root'),
        "database": env('DB_DATABASE', 'test'),
    });