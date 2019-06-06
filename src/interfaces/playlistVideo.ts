import IBase from "./base";
import { IVideo } from "./video";
import { IPlaylist } from "./playlist";
import { IVote } from "./vote";

interface IPlaylistVideo extends IBase {
    video: IVideo;
    playlist: IPlaylist;
    votes: IVote[];
}

export { IPlaylistVideo }