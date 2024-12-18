import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";

export class TypeormAdapter<T extends ObjectLiteral> {
    constructor(private dataSource: DataSource) {}

    getTypeorm() {
        return {
            getRepository: <U extends T>(entity: EntityTarget<U>): Repository<U> => {
                return this.dataSource.getRepository(entity);
            }
        };
    }
}
