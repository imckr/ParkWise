import { Router } from "express";
import clerkAuth from "../middlewares/auth.middleware.ts";
import { profileChange } from "./../controllers/setting.controller.ts";

const router = Router();

router.route("/profile-change").post(clerkAuth, profileChange);

export default router;