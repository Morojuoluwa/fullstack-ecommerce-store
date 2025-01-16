import express from "express"
import { getProfile, login, logout, refreshToken, signup } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup", signup)
router.post ("/logout", logout)
router.post("/login",login)
router.post("/refreshToken",refreshToken)
router.get("/profile", protectRoute, getProfile)
// router.post("/signin", sign)


export default router