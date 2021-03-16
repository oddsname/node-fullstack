import {setupApp} from "./src/app";
import {env} from "./src/config/env";


setupApp(
    env('APP_URL', 'http://localhost:8080'),
    env('APP_PORT', '8080'),
);