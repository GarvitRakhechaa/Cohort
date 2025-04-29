import express from 'express'
import {registerUser, verifyUser, login} from '../controllers/user.controller.js'
const router = express.Router()

// router.post("/register", registerUser)
router.post("/register", registerUser)
router.get("/verify/:token",verifyUser)
router.post("/login",login)

export default router