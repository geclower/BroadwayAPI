import { Router } from "express";
import showRoutes from "./shows.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the broadway api root!"));

router.use("/shows", showRoutes)

export default router;