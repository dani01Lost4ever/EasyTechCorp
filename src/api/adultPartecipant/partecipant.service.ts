import { assign } from "lodash";
import { NotFoundError } from "../../errors/not-found";
import { Partecipant as iPartecipant } from "./partecipant.entity";
import { Partecipant } from "./partecipant.model";

export class PartecipantService{

    async add(firstName: string, lastName: string, age: number, address: string, nationalInsuranceNumber: string, email: string, telephoneNumber: number, tipology: string, axeraCode?: String, iscriptionForm?: boolean, privacyAccepted?: boolean, imageReleaseAccepted?: boolean, paymentDone?:boolean, paymentVerified?: boolean){

        if(iscriptionForm == null || iscriptionForm == undefined){
            iscriptionForm = false
        }
        if(privacyAccepted == null || privacyAccepted == undefined){
            privacyAccepted = false
        }
        if(imageReleaseAccepted == null || imageReleaseAccepted == undefined){
            imageReleaseAccepted = false
        }
        if(paymentDone == null || paymentDone == undefined){
            paymentDone = false
        }
        if(paymentVerified == null || paymentVerified == undefined){
            paymentVerified = false
        }
        const newItem = await Partecipant.create({axeraCode, firstName, lastName, age, address, nationalInsuranceNumber, email, telephoneNumber, tipology, iscriptionForm, privacyAccepted, imageReleaseAccepted, paymentDone, paymentVerified});
        return newItem;
    }
    
    async find(
        tipology?: string,
        iscriptionForm?: boolean,
        privacyAccepted?: boolean,
        imageReleaseAccepted?: boolean,
        paymentDone?: boolean,
        paymentVerified?: boolean
        ): Promise<iPartecipant[]> {
            const listItem = Partecipant.find();
        
        if(tipology){
            listItem.find({tipology})
        }
        if(iscriptionForm){
            listItem.find({iscriptionForm})
        }
        if(privacyAccepted){
            listItem.find({privacyAccepted})
        }
        if(imageReleaseAccepted){
            listItem.find({imageReleaseAccepted})
        }
        if(paymentDone){
            listItem.find({paymentDone})
        }
        if(paymentVerified){
            listItem.find({paymentVerified})
        }

          const list = await listItem.populate("tipology").exec()
    
          return list;
      }

      async update(
        id: string,
        partecipant: Partial<iPartecipant>
        ){

            const item = await this.getById(id);
            if(!item){
                throw new NotFoundError();
            }
            assign(item, partecipant);
            await item.save();
            return this.getById(id) as Promise<iPartecipant>;

/* 

            const listItem = Partecipant.find({ id });


        if(iscriptionForm){
            listItem.updateOne({"iscriptionForm": iscriptionForm})
        }
        if(privacyAccepted){
            listItem.updateOne({"privacyAccepted": privacyAccepted})
        }
        if(imageReleaseAccepted){
            listItem.updateOne({imageReleaseAccepted})
        }
        if(paymentDone){
            listItem.updateOne({paymentDone})
        }
        if(paymentVerified){
            listItem.updateOne({paymentVerified})
        }

          const list = await Partecipant.find({id}).populate("tipology").exec()
    
          return list; */


          
      }

      async getOne(id: string): Promise<iPartecipant> {
        const item = await Partecipant.findById(id).populate("tipology");
        if(item) {
            return item;
        } else {
            throw new NotFoundError();
        }
    }

    private async getById(id: string){

        return Partecipant.findOne({_id: id}).populate("tipology");
    }
    
}
export default new PartecipantService();