import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    id: Number,
    name: String
})

export const Users = new mongoose.model('users', UsersSchema);