export interface Icomment {
    id: number;
    name: string;
    avatar: string;
    comment: string;
    dateOfCreate: string;
}

export interface Iuser {
    steamid: string;
    personaname: string;
    avatarmedium: string;
    avatarfull: string;
    timecreated: number;
    gameActivity: string;
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
