import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import mongoose from "mongoose";
import app from "./App.js";

dotenv.config()

const startServer = async()=>{
try {
     await connectDB();
     app.listen(process.env.PORT, ()=>{
        console.log(`Server started at ${process.env.PORT}`)
     })

} catch (error) {
    console.error("Error Connecting Server: ", error.message)
    process.exit(1)
}
}
startServer();