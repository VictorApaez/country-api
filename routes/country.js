import { Router } from "express";
import * as controllers from "../controllers/countries.js";
const router = Router();

router.get("/", controllers.getCountries);
router.get("/:name", controllers.getCountry);

export default router;
