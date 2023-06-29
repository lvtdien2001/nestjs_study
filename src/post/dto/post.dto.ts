export interface ICreatePostDto {
    content: string;
    title: string;
}

export interface IUpdatePostDto {
    id: number;
    content: string;
    title: string;
}