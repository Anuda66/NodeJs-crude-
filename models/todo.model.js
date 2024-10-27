
import { model, Schema } from "mongoose";

const todoSchema = new Schema({
    text: {type: String, required: true},
    priority: {type: String, required: true},
    deadline: {type: String, required: true},
});

export const Todo = model("Todo", todoSchema);