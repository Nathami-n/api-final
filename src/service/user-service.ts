import {ObtainDocumentType} from 'mongoose';
import { omit } from 'lodash';
import User, { IUserDocument } from '../models/user-model';

export async function createUser(input: ObtainDocumentType<Omit<IUserDocument, "createdAt"| "updatedAt" | "comparePassword">>) {
    try {
        const user = await User.create(input);
        return omit(user.toJSON(), "password");
    } catch (error: any
    ) {
        throw new Error(error);
    }
};


export async function validatePassword({email, password}: {email: string, password: string}){
    const user = await User.findOne({email});

    if(!user) {
        return false;
    };

    const isValid = await user.comparePassword(password);

    if(!isValid) return false;
    return omit(user.toJSON(), "password");
}