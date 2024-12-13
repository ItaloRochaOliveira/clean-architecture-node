import { env } from "@/env";
import path from "path";
import { DataSource } from "typeorm";

const pathOfEntities = path.join(__dirname, "entity", "*.ts");

const appDataSource = new DataSource({
    type: "mysql",
    host: env.MYSQL_HOST,
    port: env.MYSQL_PORT,
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE,
    synchronize: false,
    logging: true,
    entities: [pathOfEntities],
    subscribers: [],
    migrations: [],
});

export {appDataSource};