
import BookModel from "../model/bookModel.js";
import HttpError from "../middleware/HttpError.js";

//ADD BOOK (POST)
const addBook = async(req,res,next)=>{
    try {
        const {title,author,price,stock,publisher,language,pages,description} = req.body;
        const newBook = new BookModel(req.body);

        await newBook.save();
        res.status(201).json({message:"book added successfully!!",book:newBook});
    } catch (error) {
        next(new HttpError(error.message,500));  
    }
}
//GET ALL BOOK(GET)
const getAllBook = async(req,res,next)=>{
    try {
        const book = await BookModel.find({});
        res.status(200).json({message: "Successfully fetched books",book});
    } catch (error) {
        next(new HttpError(error.message,500));
    }
}
//GET BOOK BY USING ID
const bookById = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const book = await BookModel.findById(id);
        if(!book){
            return next(new HttpError("book not found",404));
        }
        res.status(200).json({message:"find successfully with this id",book});
    } catch (error) {
        next(new HttpError(error.message,500));
    }
}
//UPDATE BOOK(MANUALLY)
const updateBook = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const book  = await BookModel.findById(id);
        if(!book){
            return next(new HttpError("book not found",404));
        }
        const updates = Object.keys(req.body);
        const allowedUpdates = ["title","author","price","stock","publisher","language","pages","description"];

        const isValid = updates.every((field)=>{
            return allowedUpdates.includes(field);
        });
        if (!isValid) {
            return next(new HttpError("only allowed field can be updated", 400));
        }
        updates.forEach((update)=>{
            book[update] = req.body[update];
        });
        await book.save();
        res.status(200).json({message:"book data updated successfully!!!",updateBook});
    } catch (error) {
        next(new HttpError(error.message,500));
    }
}
//DELETE BOOK
const deleteBook = async(req,res,next)=>{
    try {
        const id = req.params.id;
        const book = await BookModel.findByIdAndDelete(id);
        if(!book){
            return next(new HttpError("book not found",404));
        }
        res.status(200).json({ message: "book data deleted successfully" ,deleteBook});
    } catch (error) {
        next(new HttpError(error.message,500));
    }
}

export default {addBook,getAllBook,bookById,updateBook,deleteBook};