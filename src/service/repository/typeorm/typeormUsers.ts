import { UpdateResult } from "typeorm";
import { Users } from "../../../db/typeorm/entity/Users";
import UsersRepository from "../UsersRepository";
import { appDataSource } from "@/db/typeorm/appDataSource";

export default class TypeORMUsersRepository implements UsersRepository{
    private readonly typeORM = appDataSource.getRepository(Users);

    getAll(): Promise<Users[]> {
        return this.typeORM.find();
    }
    getById(id: string): Promise<Users | null> {
        return this.typeORM.findOne({
            where: {id}
        });
    }
    create(user: Users): Promise<Users> {
        return this.typeORM.save(user);
    }
    edit(id: string, user: Users): Promise<UpdateResult> {
        return this.typeORM.update(id, user);
    }
    delete(id: string) {
        return this.typeORM.delete(id);
    }

}