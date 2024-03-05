import { Router } from "express";
import * as controllers from "../controllers/shows.js"

const router = Router()

router.get('/', controllers.getShows)
router.get('/:id', controllers.getShow)
router.post('/', controllers.createShow)
router.put("/:id", controllers. updateShow)
router.delete("/:id", controllers.deleteShow)

export default router