import { NextFunction, Request, Response } from "express";
import { TypedRequest } from "../../utils/typed-request.interface";
import { AddPartecipantDTO, getOnePartecipantDTO } from "./partecipant.dto";
import partecipantService from "./partecipant.service";

export const addPartecipant = async(
    req: TypedRequest<AddPartecipantDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try{
    const axeraCode = req.body.axeraCode;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const address = req.body.address;
    const nationalInsuranceNumber = req.body.nationalInsuranceNumber;
    const email = req.body.email;
    const telephoneNumber = req.body.telephoneNumber;
    const tipology = req.body.tipology;
    const iscriptionForm = req.body.iscriptionForm;
    const privacyAccepted = req.body.privacyAccepted;
    const imageReleaseAccepted = req.body.imageReleaseAccepted;
    const paymentDone = req.body.paymentDone;

    const partecipant = await partecipantService.add(axeraCode,firstName,lastName,age,address,nationalInsuranceNumber,email,telephoneNumber,tipology,iscriptionForm,privacyAccepted,imageReleaseAccepted,paymentDone);
  
  res.json(partecipant);
    }
    catch(err){
        next(err);
    }
  }

export const partecipantList = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try{    
        const partecipantList = await partecipantService.find();
  
        res.json(partecipantList);
    }
    catch(err){
        next(err);
    }
  }

export const getOnePartecipant = async(
    req: TypedRequest<getOnePartecipantDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try{    
        const id = req.body.partecipantId;
        const partecipant = await partecipantService.getOne(id);
  
        res.json(partecipant);
    }
    catch(err){
        next(err);
    }
  }