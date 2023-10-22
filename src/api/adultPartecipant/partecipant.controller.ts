import { NextFunction, Request, Response } from "express";
import { TypedRequest } from "../../utils/typed-request.interface";
import { AddPartecipantDTO, findPartecipantDTO, getOnePartecipantDTO, updateDTO } from "./partecipant.dto";
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
    const tipology = req.body.tipologyId;
    const iscriptionForm = req.body.iscriptionForm;
    const privacyAccepted = req.body.privacyAccepted;
    const imageReleaseAccepted = req.body.imageReleaseAccepted;
    const paymentDone = req.body.paymentDone;
    const paymentVerified = req.body.paymentVerified;

    const partecipant = await partecipantService.add(firstName,lastName,age,address,nationalInsuranceNumber,email,telephoneNumber,tipology,axeraCode,iscriptionForm,privacyAccepted,imageReleaseAccepted,paymentDone,paymentVerified);
  
  res.json(partecipant);
    }
    catch(err){
        next(err);
    }
  }

export const partecipantList = async(
    req: TypedRequest<findPartecipantDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try{    
      const tipology = req.body.tipologyId;
      const iscriptionForm = req.body.iscriptionForm;
      const privacyAccepted = req.body.privacyAccepted;
      const imageReleaseAccepted = req.body.imageReleaseAccepted;
      const paymentDone = req.body.paymentDone;
      const paymentVerified = req.body.paymentVerified;

        const partecipantList = await partecipantService.find(tipology, iscriptionForm, privacyAccepted, imageReleaseAccepted, paymentDone, paymentVerified);
  
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

  
export const updatePartecipant = async(
  req: TypedRequest<updateDTO>,
  res: Response,
  next: NextFunction
) => {
  try{    
    const partecipant = req.body.partecipantId;
    const iscriptionForm = req.body.iscriptionForm;
    const privacyAccepted = req.body.privacyAccepted;
    const imageReleaseAccepted = req.body.imageReleaseAccepted;
    const paymentDone = req.body.paymentDone;
    const paymentVerified = req.body.paymentVerified;

      const partecipantList = await partecipantService.update(partecipant,{iscriptionForm: iscriptionForm, privacyAccepted: privacyAccepted, imageReleaseAccepted: imageReleaseAccepted, paymentDone: paymentDone, paymentVerified: paymentVerified});

      res.json(partecipantList);
  }
  catch(err){
      next(err);
  }
}