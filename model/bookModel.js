import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique:true
    },

    author: {
        type: String,
        required: true,
        unique:true
    },

    price: {
        type: Number,
        required: true
    },

    stock: {
        type: Number,
        required: true,
        default: 0
    },

    publisher: {
        type: String
    },

    language: {
        type: String,
        default: "English"
    },

    pages: {
        type: Number
    },

    description: {
        type: String
    }
},
{
    timestamps: true
});

const BookModel = mongoose.model("book",bookSchema);
export default BookModel;