const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
const app = express();

dbConnect();

app.listen(process.env.PORT,()=>{
  console.log(`Server listening at port ${process.env.PORT}`);
})