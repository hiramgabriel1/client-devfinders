export interface PopularPostInterface {
    length: number;
    id?: number;
    titlePost: string;
    descriptionPost: string;
    photoUrlWallpaper: string;
    imageUrlReference: string;
    likesCount: number;
    categoryPost: string;
    creatorPost: { username: string };
    creatorPostId: number;
    createdAt: Date | string;
}
