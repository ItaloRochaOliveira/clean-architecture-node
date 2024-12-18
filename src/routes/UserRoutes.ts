import { Request, Response, Router } from "express";
import GetUsersController from "../controller/Users/GetUsersController";
import { ExpressAdapter } from "@/interfaceAdapters/ExpressAdapter";

const userRoutes = Router();

const getUsersController = new GetUsersController();

userRoutes.get("/:id", (req: Request, res: Response) => {
	const adapter = new ExpressAdapter(req, res);

    // adapter.send(200, true);

    return getUsersController.handle(adapter);
});

export default userRoutes;