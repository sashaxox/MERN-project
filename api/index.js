import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// только с впн
mongoose.connect(process.env.MONGODB).then (()=> {
  console.log("Connected");
}).catch((err)=>{
  console.log(err);
})


const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
