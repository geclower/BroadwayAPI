import { Router } from "express";
import * as controllers from "../controllers/shows.js"

const router = Router()

router.get('/', controllers.getShows)
router.get('/closing', controllers.getClosing)
router.get('/musicals', controllers.getMusicals)
router.get('/nonmusicals', controllers.getNonMusicals)
router.get('/:name', controllers.nameShow)
router.get('/:id', controllers.getShow)

router.post('/', controllers.createShow)

router.put("/:name", controllers.updateShowByName)
router.put("/:id", controllers.updateShow)

router.delete("/:name", controllers.deleteShowByName)
router.delete("/:id", controllers.deleteShow)

export default router