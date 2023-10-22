import mongoose, { Schema } from "mongoose";
import { Partecipant as iPartecipant } from "./partecipant.entity";

export const partecipantSchema = new Schema<iPartecipant>({
    axeraCode: Boolean,
    //dati utente
    firstName: String,
    lastName: String,
    age: Number,
    address: String,
    nationalInsuranceNumber: String,
    email: String, 
    telephoneNumber: Number,
    tipology: {type : Schema.Types.ObjectId, ref: 'ClassTipologies'},
    //checkboxS
    iscriptionForm: Boolean,
    privacyAccepted: Boolean,
    imageReleaseAccepted: Boolean,
    paymentDone: Boolean
})

partecipantSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });

  partecipantSchema.set("toObject", {
    virtuals: true,
    transform: (_, ret) => {
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  });

export const Partecipant = mongoose.model<iPartecipant>("Partecipants", partecipantSchema);
