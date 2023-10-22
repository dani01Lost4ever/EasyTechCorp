import { Router } from "express";
import userRouter from "./users/user.router";
import authRouter from "./auth/auth.router";
import partecipantRouter from "./adultPartecipant/partecipant.router";
import tipologyRouter from "./classTipology/classTipology.router";
import uPartecipantRouter from "./underagePartecipant/uPartecipant.router";
const router = Router();

router.use("/users", userRouter);
router.use("/partecipant", partecipantRouter);
router.use("/tipology", tipologyRouter);
router.use("/upartecipant", uPartecipantRouter);
router.use(authRouter);

export default router;
