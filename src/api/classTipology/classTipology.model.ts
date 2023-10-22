import  mongoose from 'mongoose';
import { ClassTipology as iClassTipology} from './classTipology.entity';

export const classTipologySchema = new mongoose.Schema<iClassTipology>({
  title: String 
});


classTipologySchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

classTipologySchema.set('toObject', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

export const ClassTipology = mongoose.model<iClassTipology>('ClassTipologies', classTipologySchema);