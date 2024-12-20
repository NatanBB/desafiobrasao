import { Router } from "express";
import { createFilling, getFillings } from "../controllers/fillingController";

const router = Router();

router.post("/", createFilling);
router.get("/", getFillings);

export default router;
