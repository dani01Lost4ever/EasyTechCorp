import { Router } from "express";
import { validate } from "../../utils/validation.middleware";
import { addTipology, listTipologies, getOneTipology} from "./classTipology.controller";
import { isAuthenticated } from "../../utils/auth/authenticated.middleware";
import { AddClassTipologyDTO, ListIdDTO } from "./classTipology.dto";

const router = Router();

router.post('/add', validate(AddClassTipologyDTO), addTipology);
router.get('/list', listTipologies);
router.get('/getOne', validate(ListIdDTO), getOneTipology);

export default router;