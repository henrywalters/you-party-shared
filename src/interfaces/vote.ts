import IBase from "./base";
import { IGuest } from "./guest";
import { IPlaylistVideo } from "./playlistVideo";

enum VoteType {
    UPVOTE = 1,
    DOWNVOTE = -1
};

interface IVote extends IBase {
    type: VoteType;
    guest: IGuest;
    playlistVideo: IPlaylistVideo;
}

export {
    IVote,
    VoteType,
}