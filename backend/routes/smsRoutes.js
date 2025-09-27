import express from "express";
import sendSms from "../controllers/smsController.js";


const router = express.Router();
router.post("/sendotp", sendSms  );
// router.post("/verifyotp", verifyotp);

export default router;