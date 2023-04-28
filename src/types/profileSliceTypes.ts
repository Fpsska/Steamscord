interface Iuser {
    id: string;
    name: string;
    avatar: string;
}

export interface Icomment extends Iuser {
    comment: string;
    dateOfCreate: string;
}

export interface Ifriend extends Iuser {
    avatarFull: string;
    status: boolean;
    gameActivity: string;
}

export interface profileSliceTypes {
    friends: Ifriend[];
    currentUser: Ifriend[];
    comments: Icomment[];
    gameActivity: string[];
    timeZones: string[];
    usersFetchingStatus: string;
    usersFetchingError: null | string;
    commentsFetchingStatus: string;
    commentsFetchingError: null | string;
    isDataLoading: boolean;
    isCommentCreated: null | boolean;
}
