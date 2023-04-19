export interface Ichannel {
    id: number;
    name: string;
    link: string
}

export interface mainSliceTypes {
    channels: Ichannel[];
    isFirstPageLoading: boolean
}