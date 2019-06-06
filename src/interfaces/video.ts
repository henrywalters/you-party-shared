import IBase from "./base";

interface IVideo extends IBase {
    title: string;
    key: string;
    description: string;
    image: string;
    duration: number;
}

export { IVideo }