import { Router } from "express";
import countryRoutes from "./country.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/countries", countryRoutes);

export default router;
