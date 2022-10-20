import { Router } from "express";
import * as controllers from "../controllers/countries.js";
const router = Router();

router.get("/", controllers.getCountries);
router.get("/name/:name", controllers.getCountry);
router.get("/continent/:continent", controllers.getContinent);
export default router;
