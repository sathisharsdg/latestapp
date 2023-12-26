const express = require("express");
const app = express();
const userRouter = require("./Controllers/userController");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then((r)=>{
   console.log("DB Connected Correctly");
})
.catch((err)=>{
   console.log(err + " " + "error came");
})

app.use(cors()); 
app.use(express.json());
app.use("/api", userRouter);

app.listen(5000,()=>{
    console.log("Server runs on 5000");
})