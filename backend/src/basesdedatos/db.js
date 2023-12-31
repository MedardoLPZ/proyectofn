import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSAWORD, DB_DATABASES, DB_PORT } from "./config.js";


export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSAWORD,
    port: DB_PORT,
    database: DB_DATABASES

});
