import IBase from "./base";
import { IParty } from "./party";

interface IPlaylist extends IBase {
    name: string;
    party: IParty;
}

export { IPlaylist }