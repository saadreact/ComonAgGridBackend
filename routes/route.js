import express from "express";
import {addViews,getAllViews,editView,deleteView} from "../controller/AgGridViewsController.js"

const router = express.Router();

router.post("/addViews", addViews);
router.get("/getAllViews", getAllViews);
router.put("/:id", editView);
router.delete("/:id", deleteView);

export default router;