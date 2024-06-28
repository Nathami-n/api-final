import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { IUserDocument } from "./user-model";

export interface SchemaDocument extends mongoose.Document {
    user: IUserDocument["_id"],
    valid: boolean,
    password: string,
    createdAt: Date,
    updatedAt: Date,
};



const sessionSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    valid: {type: Boolean, default: true},
    password: { type: String, required: true },
  },
  { timestamps: true }
);



const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;