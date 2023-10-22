import { Types } from "mongoose";
import { ClassTipology } from "../classTipology/classTipology.entity";

export interface Partecipant {    
    id?: string;
    axeraCode: boolean; //non avendo dati riguardanti ai clienti axera per il momento ho inserito un boolean
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
    iscriptionForm: boolean;
    privacyAccepted: boolean;
    imageReleaseAccepted: boolean;
    paymentDone: boolean;
  }