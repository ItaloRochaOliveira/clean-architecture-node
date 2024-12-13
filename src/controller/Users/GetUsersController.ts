import { Request, Response } from "express";
import { getUsersShema } from "./schema/GetUserSchema";
import GetUsersService from "../../service/GetUsersService";
import TypeORMUsersRepository from "../../service/repository/typeorm/typeormUsers";

export default class GetUsersController{
    async handle(req: Request, res: Response){
        const data = getUsersShema.parse(req.body);

        const typeORMUsersRepository = new TypeORMUsersRepository();

        const getUsersService = new GetUsersService(
            typeORMUsersRepository
        );

        return await getUsersService.execute();
    }
}