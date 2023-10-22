import mongoose, { Schema } from "mongoose";
import { Partecipant as iPartecipant } from "./partecipant.entity";
import { v4 as uuidv4 } from "uuid";

export const partecipantSchema = new Schema<iPartecipant>({
    axeraCode: String,
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
    iscriptionForm: {type : Boolean, default : false},
    privacyAccepted: { type: Boolean, default: false },
    imageReleaseAccepted: { type: Boolean, default: false },
    paymentDone: { type: Boolean, default: false },
    paymentVerified: { type: Boolean, default: false }
})

 partecipantSchema.pre("findOne", function (next) {
  this.populate("parent");
  next();
}); 

partecipantSchema.pre("save", function (next: any) {
  if (this.axeraCode == null) {
    this.axeraCode = uuidv4();
  }
  next();
});

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
