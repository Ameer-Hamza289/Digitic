const mongoose  = require("mongoose");

const dbConnect = () => {
     mongoose.connect(process.env.MONGODB_URL)
     .then(()=>console.log("MongoDB connected Successfully!"))
     .catch((err)=>console.log("Error : ", err))
};
module.exports = dbConnect;