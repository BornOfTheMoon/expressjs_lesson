import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    name: String,
    email: String,
    movie_id: mongoose.Types.ObjectId,
    text: String,
    date: Date,
})

export const Comments = new mongoose.model('comments', CommentsSchema);