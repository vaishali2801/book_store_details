import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import HttpError from "./middleware/HttpError.js";
import router from "./route/bookRoute.js";

dotenv.config();
const port =process.env.PORT || 5001;

const app = express();
// parse incoming JSON data from the request body and convert it into a JavaScript object.
app.use(express.json());
app.use("/book",router);

//server
app.get("/",(req,res)=>{
    res.status(200).json("hello from book store management!!!!!!!");
});
//undefined route
app.use((req,res,next)=>{
    next(new HttpError("route not found",404));
});
//centralized error handling 
app.use((error,req,res,next)=>{
    res.status(error.statusCode || 500).json({message:error.message||"internal server error"});
});
async function startServer() {
    try {
        await connectDB();
        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
startServer();