const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const app = express();


app.listen(process.env.PORT,()=>{
  console.log(`Server listening at port ${process.env.PORT}`);
})