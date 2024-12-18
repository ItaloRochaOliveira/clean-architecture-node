import { Request, Response } from "express";
import { getUsersShema } from "./schema/GetUserSchema";
import GetUsersService from "../../service/GetUsersService";
import TypeORMUsersRepository from "../../service/repository/typeorm/typeormUsers";
import { IHttpContext } from "@/interfaces/IRequest";

export default class GetUsersController{
    async handle(ctx: IHttpContext){
        try{
            console.log(ctx.getRequest())
            const data = getUsersShema.parse(ctx.getRequest().params.id);

            const typeORMUsersRepository = new TypeORMUsersRepository();

            const getUsersService = new GetUsersService(
                typeORMUsersRepository
            );

            return ctx.send(200, getUsersService.execute(data));
        } catch(err){
            return ctx.send(500, err)
        }
    }
}