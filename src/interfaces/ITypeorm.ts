import { EntityTarget, ObjectLiteral, Repository } from "typeorm";

type LogType<T> = T extends Array<infer U> ? U : T;


export interface ITypeorm<T extends ObjectLiteral> {
    getRepository(t: EntityTarget<T>): Repository<T>;
}

export interface ITypeormcontext<T extends ObjectLiteral> {
    getTypeorm(): ITypeorm<T>;
}