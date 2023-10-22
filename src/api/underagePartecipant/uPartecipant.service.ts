import { NotFoundError } from "../../errors/not-found";
import { uPartecipant } from "./uPartecipant.entity";
import { UPartecipant } from "./uPartecipant.model";

export class uPartecipantService {
  async add(uPartecipant: uPartecipant) {
    const newItem = await UPartecipant.create(uPartecipant);
    return newItem;
  }

  async find(): Promise<uPartecipant[]> {
    const listItem = await UPartecipant.find();
    return listItem;
  }

  async getOne(id: string): Promise<uPartecipant> {
    const item = await UPartecipant.findById(id);
    if (item) {
      return item;
    } else {
      throw new NotFoundError();
    }
  }

  async findByTipology(id?: string): Promise<uPartecipant[]> {
    const listItem = await UPartecipant.find({ axeraCode: id });
    return listItem;
  }
}
export default new uPartecipantService();
