import { Types } from "mongoose";
import { ClassTipology } from "../classTipology/classTipology.entity";

export interface Partecipant {    
    id?: string;
    axeraCode: string;
    //dati utente
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    nationalInsuranceNumber: string;
    email: string;
    telephoneNumber: number;
    tipology: Types.ObjectId | string | ClassTipology;
    //checkbox
    iscriptionForm?: boolean;
    privacyAccepted?: boolean;
    imageReleaseAccepted?: boolean;
    paymentDone?: boolean;
    paymentVerified?: boolean;
  }