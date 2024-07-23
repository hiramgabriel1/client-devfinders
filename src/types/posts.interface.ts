export interface PopularPostInterface {
    date?: Date | string | number;
    length?: number;
    id?: number;
    titlePost: string;
    descriptionPost: string;
    photoUrlWallpaper: string;
    imageUrlReference: string;
    likesCount: number;
    categoryPost: string;
    creatorPost?: { username: string } | undefined;
    creatorPostId?: number;
    createdAt?: Date | string;
    Comments?: []
}

export interface Posts {
    titlePost: string;
    descriptionPost: string;
    photoUrlWallpaper: string;
    imageUrlReference: string;
    likesCount: string
    categoryPost: string
}