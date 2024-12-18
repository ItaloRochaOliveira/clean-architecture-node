import { env } from "@/env";
import { TypeormAdapter } from "@/interfaceAdapters/TypeormAdapter";
import path from "path";
import { DataSource } from "typeorm";
import { Users } from "./entity/Users";
import { Products } from "./entity/Products";

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

const appDataSource2 = new TypeormAdapter(appDataSource).getTypeorm();

export {appDataSource2};