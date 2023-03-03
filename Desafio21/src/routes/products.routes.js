import { Router } from "express";
import { saveController, getAllController } from "../controllers/rest/products.controllers.js"

const router = Router();

router.post('/add', saveController);
router.get('/list', getAllController);

export default router;