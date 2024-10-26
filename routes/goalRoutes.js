import express from "express";
import { getGoals, setGoals, updateGoals, deleteGoals, readData } from "../controllers/goalControllers";
const router = express.Router();


router.route('/').get(readData)
// router.route('/').get(getGoals).post(setGoals)
// router.route('/:id').put(updateGoals).delete(deleteGoals)

module.exports = router;