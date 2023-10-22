import { Router } from "express";
import { validate } from "../../utils/validation.middleware";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";
import {
  addPartecipant,
  partecipantList,
  getOnePartecipant,
} from "./uPartecipant.controller";
import { AddUPartecipantDTO, getOnePartecipantDTO } from "./uPartecipant.dto";

const router = Router();

router.use(isAuthenticated);
router.post("/addU", validate(AddUPartecipantDTO), addPartecipant);
router.get("/findU", partecipantList);
router.get("/getOneU", validate(getOnePartecipantDTO), getOnePartecipant);

export default router;
