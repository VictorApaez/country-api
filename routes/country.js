import { Router } from "express";
import * as controllers from "../controllers/countries.js";
const router = Router();

router.get("/", controllers.getCountries);

export default router;
