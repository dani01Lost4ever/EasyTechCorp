import { Router } from "express";
import { AddPartecipantDTO, getOnePartecipantDTO, updateDTO } from "./partecipant.dto";
import { addPartecipant, getOnePartecipant, partecipantList, updatePartecipant } from "./partecipant.controller";
import { validate } from "../../utils/validation.middleware";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";

const router = Router();

router.use(isAuthenticated);
router.post('/add', validate(AddPartecipantDTO), addPartecipant);
router.get('/find', partecipantList);
router.get('/getOne', validate(getOnePartecipantDTO), getOnePartecipant);
router.patch('/update', validate(updateDTO), updatePartecipant);

export default router;