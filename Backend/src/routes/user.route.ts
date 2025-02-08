import { Router } from "express";
import clerkAuth from "../middlewares/auth.middleware.ts";
import { completeUserProfile } from "./../controllers/user.controller.ts"

const router = Router()

router.route("/completeUserProfile").post(clerkAuth,completeUserProfile);

export default router;
