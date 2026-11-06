// Module 1 - Server~ Setup
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Notes API server is running..."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});