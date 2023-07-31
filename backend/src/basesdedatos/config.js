import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 7000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER  || "root";
export const DB_PASSAWORD = process.env.DB_PASSAWORD || "";
export const DB_DATABASES = process.env.DB_DATABASES || "proyecto";
export const DB_PORT = process.env.DB_PORT || 3306;