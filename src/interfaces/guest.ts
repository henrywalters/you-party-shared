import IBase from "./base";
import { IParty } from "./party";

interface IGuest extends IBase {
    nickname: string;
    party: IParty;
}

export { IGuest }