import { Router } from "express";
import GetUsersController from "../controller/Users/GetUsersController";

const userRoutes = Router();

const getUsersController = new GetUsersController();

userRoutes.get("/", getUsersController.handle);

export default userRoutes;