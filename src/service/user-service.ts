import {ObtainDocumentType} from 'mongoose';
import User, { IUserDocument } from '../models/user-model';

export async function createUser(input: ObtainDocumentType<IUserDocument>) {
    try {
        return await User.create(input);
    } catch (error: any
    ) {
        throw new Error(error);
    }
}