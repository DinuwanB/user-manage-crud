import { Router } from "express";
import userRouter from "./user/user.route";

const router: Router = Router();

router.get("/", (_req, res) => {
  res.send("Response from NodeTS Server");
});

router.use("/user", userRouter);

export default router;
