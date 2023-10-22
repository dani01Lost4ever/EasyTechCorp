import { NotFoundError } from "../../errors/not-found";
import { Partecipant as iPartecipant } from "./partecipant.entity";
import { Partecipant } from "./partecipant.model";

export class PartecipantService{

    async add(axeraCode: boolean, firstName: string, lastName: string, age: number, address: string, nationalInsuranceNumber: string, email: string, telephoneNumber: number, tipology: string, iscriptionForm?: boolean, privacyAccepted?: boolean, imageReleaseAccepted?: boolean, paymentDone?:boolean){
        const newItem = await Partecipant.create({axeraCode, firstName, lastName, age, address, nationalInsuranceNumber, email, telephoneNumber, tipology, iscriptionForm, privacyAccepted, imageReleaseAccepted, paymentDone});
        return newItem;
    }
    
    async find(): Promise<iPartecipant[]> {
        const listItem = await Partecipant.find();
        
        return listItem;
      }

      async getOne(id: string): Promise<iPartecipant> {
        const item = await Partecipant.findById(id);
        if(item) {
            return item;
        } else {
            throw new NotFoundError();
        }
    }


}
export default new PartecipantService();