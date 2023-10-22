import mongoose, { Schema } from "mongoose";
import { uParents as IuParent } from "./uParents.entity";
export const uParentSchema = new Schema<IuParent>({
  axeraCode: String,
  //dati utente
  firstName: String,
  lastName: String,
  age: Number,
  address: String,
  nationalInsuranceNumber: String,
  email: String,
  telephoneNumber: Number,
});

uParentSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

uParentSchema.set("toObject", {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

export const Partecipant = mongoose.model<IuParent>("uParents", uParentSchema);
