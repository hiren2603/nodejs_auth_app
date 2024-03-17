import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config({ path: "./src/.env" });

export const db = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "otp_db",
  synchronize: true,
  entities: ["src/entity/**/*{.ts, .js}"],
  logging: true,
});
