//module 2 - Note Model schema
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            default: ''
        },

        completed: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;