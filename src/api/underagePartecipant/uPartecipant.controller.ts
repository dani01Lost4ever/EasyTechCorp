import { NextFunction, Request, Response } from "express";
import { TypedRequest } from "../../utils/typed-request.interface";
import { AddUPartecipantDTO, getOnePartecipantDTO } from "./uPartecipant.dto";
import uPartecipantService from "./uPartecipant.service";
import { UPartecipant } from "./uPartecipant.model";

export const addPartecipant = async (
  req: TypedRequest<AddUPartecipantDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUPartecipant = new UPartecipant(req.body!);
    const partecipant = await uPartecipantService.add(newUPartecipant);
    res.json(partecipant);
  } catch (err) {
    next(err);
  }
};

export const partecipantList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const partecipantList = await uPartecipantService.find();
    res.json(partecipantList);
  } catch (err) {
    next(err);
  }
};

export const getOnePartecipant = async (
  req: TypedRequest<getOnePartecipantDTO>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.body.partecipantId;
    const partecipant = await uPartecipantService.getOne(id);
    res.json(partecipant);
  } catch (err) {
    next(err);
  }
};
