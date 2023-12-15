import mongoose, {Schema} from "mongoose";


const noteSchema = new Schema({
    title: String,
    body: String,
    author: String
});

const Note = mongoose.model('note', noteSchema);

export default Note;