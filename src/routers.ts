import { Router } from "express";
import { authRouter } from "./apps/auth/auth.router";
import { userRouter } from "./apps/users/users.router";
import { cityRouter } from "./apps/cities/cities.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/cities", cityRouter);

export default router;
