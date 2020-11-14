import { IBase } from './base';

export interface IMovie extends IBase{
    title: string,
    imageUrl: string,
    description: string,
    peopleLiked: string
}