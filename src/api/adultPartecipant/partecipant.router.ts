import { Router } from "express";
import { AddPartecipantDTO, getOnePartecipantDTO } from "./partecipant.dto";
import { addPartecipant, getOnePartecipant, partecipantList } from "./partecipant.controller";
import { validate } from "../../utils/validation.middleware";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";

const router = Router();

router.use(isAuthenticated);
router.post('/add', validate(AddPartecipantDTO), addPartecipant);
router.get('/find', partecipantList);
router.get('/getOne', validate(getOnePartecipantDTO), getOnePartecipant);

export default router;