import { Router } from "express";
import { login } from "../controller/auth.controller";
import { Profile } from "../controller/auth.controller";
import { auth } from "../middlewares";


const router = Router();


router.post("/login", login);
router.get("/profile", auth, Profile);


export default router;