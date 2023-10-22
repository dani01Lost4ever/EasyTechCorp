import { Types } from "mongoose";
import { ClassTipology } from "../classTipology/classTipology.entity";
import { uParents } from "../uParents/uParents.entity";

export interface uPartecipant {
  id?: string;
  axeraCode?: string; //non avendo dati riguardanti ai clienti axera per il momento ho inserito un boolean
  //dati utente
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  nationalInsuranceNumber: string; //codice fiscale
  email?: string;
  telephoneNumber?: number;
  tipology: Types.ObjectId | string | ClassTipology;
  //checkbox
  iscriptionForm: boolean;
  privacyAccepted: boolean;
  imageReleaseAccepted: boolean;
  paymentDone: boolean;
  paymentVerified: boolean;
  parent: Types.ObjectId | string | uParents;
}
