import express from 'express'
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController'

const router = express.Router();

//create new tour
router.post("/",createTour);

//update tour
router.put("/:id",updateTour);

//delete tour
router.delete("/:id",deleteTour);

//getSZIngle tour
router.get("/:id",getSingleTour);

//getAll tour
router.get("/",getAllTour);

export default router;