import { NextFunction, Request, Response } from "express";
import  classTipologyService, { ClassTipologyService } from "./classTipology.service";
import { AddClassTipologyDTO, ListIdDTO } from "./classTipology.dto";
import { TypedRequest } from "../../utils/typed-request.interface";


export const addTipology = async(
    req: TypedRequest<AddClassTipologyDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try{
    const name = req.body.title;
    const tipology = await classTipologyService.add(name);
  
  res.json(tipology);
    }
    catch(err){
        next(err);
    }
  }

export const listTipologies = async(
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try{    
        const tipologyList = await classTipologyService.list();
  
        res.json(tipologyList);
    }
    catch(err){
        next(err);
    }
  }

export const getOneTipology = async(
    req: TypedRequest<ListIdDTO>,
    res: Response,
    next: NextFunction
  ) => {
    try{    
        const id = req.body.id;
        const tipologyList = await classTipologyService.getOne(id);
  
        res.json(tipologyList);
    }
    catch(err){
        next(err);
    }
  }