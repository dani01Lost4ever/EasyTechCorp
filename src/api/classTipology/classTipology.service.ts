import { Types } from "mongoose";
import { ClassTipology as iClassTipology } from "./classTipology.entity";
import { ClassTipology } from "./classTipology.model";
import { NotFoundError } from "../../errors/not-found";
import { ClassTipologyExistsError } from "../../errors/tipology-exists";


export class ClassTipologyService  {

    async add(title: string) {
      const existingTipology = await ClassTipology.findOne({'title': title});
      if(existingTipology){
        throw new ClassTipologyExistsError();
      }else{
      const newItem = await ClassTipology.create({title});
      return newItem;
      }
      
    }

    async list(): Promise<iClassTipology[]> {
        const newItem = await ClassTipology.find();
        
        return newItem;
      }
      async getOne(id: string | Types.ObjectId): Promise<iClassTipology> {
        const newItem = await ClassTipology.findById(id);
        if(newItem) {
            return newItem;
        } else {
            throw new NotFoundError();
        }
    }

  }
  
  export default new ClassTipologyService();