import express from "express"
const router=express.Router();
import { homeControl } from "../controller/controller.js";


router.get('/' , homeControl);

export default router