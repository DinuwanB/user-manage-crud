import { Router } from "express";
import Controller from "./user.controller";

const userRouter: Router = Router();
const controller = new Controller();

userRouter.post("/add", controller.addUser);
userRouter.put("/update", controller.updateUser);
userRouter.delete("/delete/:id", controller.deleteUser);
userRouter.get("/detail/:id", controller.getUserById);
userRouter.get("/list", controller.getUserList);

export default userRouter;
