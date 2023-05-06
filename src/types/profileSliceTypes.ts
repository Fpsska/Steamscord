interface Iuser {
    id: string;
    name: string;
    avatar: string;
}

export interface Ireaction {
    id: string,
    emoji: string
}

export interface Imessage extends Iuser {
    message: string;
    dateOfCreate: string;
    isEditable: boolean;
    isEditing?: boolean;
    reactions: Ireaction[]
}

export interface Ifriend extends Iuser {
    avatarFull: string;
    status: boolean;
    gameActivity: string;
}

export interface profileSliceTypes {
    friends: Ifriend[];
    currentUser: Ifriend[];
    messages: Imessage[];
    gameActivity: string[];
    timeZones: string[];

    isChatEmojiPickerVisible: boolean;
    isReactionEmojiPickerVisible: boolean;
    reactionEmojiPickerPosition: number;
    currentMessageID: string;

    usersFetchingStatus: string;
    usersFetchingError: null | string;

    commentsFetchingStatus: string;
    commentsFetchingError: null | string;

    isDataLoading: boolean;
    isMessageCreated: null | boolean;
}
