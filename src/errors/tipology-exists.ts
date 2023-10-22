import { NextFunction, Request, Response } from "express";

export class ClassTipologyExistsError extends Error {
  constructor() {
    super();
    this.name = 'TipologyExists';
    this.message = 'Tipology already exists';
  }
}

export const classTipologyExistsErrorExistsHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ClassTipologyExistsError) {
    res.status(404);
    res.json({
      error: err.name,
      message: err.message
    });
  } else {
    next(err);
  }
}