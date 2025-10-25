import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    title: String,
    desc: String,
    startDate: {type: Date, default: Date.now},
    days: Number,
    isDone: Boolean,
});

export const Todo = mongoose.model('Todo', toDoSchema);

