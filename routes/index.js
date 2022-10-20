import { Router } from "express";
import countryRoutes from "./country.js";
const router = Router();

router.use("/countries", countryRoutes);

export default router;
