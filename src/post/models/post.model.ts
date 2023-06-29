import { Schema } from "mongoose";

export const PostSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    }
}, { timestamps: true })