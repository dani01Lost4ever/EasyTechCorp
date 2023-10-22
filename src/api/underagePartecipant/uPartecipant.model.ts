import mongoose, { Schema } from "mongoose";
import { uPartecipant as IuPartecipant } from "./uPartecipant.entity";
import { v4 as uuidv4 } from "uuid";
export const uPartecipantSchema = new Schema<IuPartecipant>({
  axeraCode: String,
  //dati utente
  firstName: String,
  lastName: String,
  age: Number,
  address: String,
  nationalInsuranceNumber: String,
  email: String,
  telephoneNumber: Number,
  tipology: { type: Schema.Types.ObjectId, ref: "ClassTipologies" },
  //checkboxS
  iscriptionForm: { type: Boolean, default: false },
  privacyAccepted: { type: Boolean, default: false },
  imageReleaseAccepted: { type: Boolean, default: false },
  paymentDone: { type: Boolean, default: false },
  paymentVerified: { type: Boolean, default: false },
  parent: { type: Schema.Types.ObjectId, ref: "uParents" },
});

uPartecipantSchema.pre("save", function (next: any) {
  if (this.axeraCode == null) {
    this.axeraCode = uuidv4();
  }
  next();
});

uPartecipantSchema.pre("findOne", function (next) {
  this.populate("tipology");
  next();
});

uPartecipantSchema.pre("findOne", function (next) {
  this.populate("parent");
  next();
});

uPartecipantSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

uPartecipantSchema.set("toObject", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const UPartecipant = mongoose.model<IuPartecipant>(
  "uPartecipants",
  uPartecipantSchema
);
