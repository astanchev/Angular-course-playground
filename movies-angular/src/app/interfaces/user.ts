import { IBase } from './base';

export interface IUser  extends IBase{
    email: string
    lastLogin: Date,
    userStatus: string,
    blUserLocale: string,
    socialAccount: string
}