import { Router } from "express";
import { authenticate } from "../middleware";
import * as bookingCtrl from "../controllers/booking";

const router = Router();

router.post("/", authenticate, bookingCtrl.create);
router.get("/history", authenticate, bookingCtrl.history);

export default router;
