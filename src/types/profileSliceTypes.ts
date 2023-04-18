export interface Icomment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string
}

export interface Iuser {
    steamid: number;
    personaname: string;
    avatarmedium: string;
    avatarfull: string;
    timecreated: number;
    comment: string
}

export interface profileSliceTypes {
    users: Iuser[];
    currentUser: Iuser[];
    comments: Icomment[];
    gameActivity: string[];
    timeZones: string[];
    usersFetchingStatus: string;
    usersFetchingError: null | string;
    commentsFetchingStatus: string;
    commentsFetchingError: null | string;
    isDataLoading: boolean;
}
