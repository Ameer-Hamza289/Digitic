const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
const app = express();
const cors=require("cors");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const blogRouter = require("./routes/blogRoutes");
const categoryRouter = require("./routes/productCategoryRoutes");
const blogcategoryRouter = require("./routes/blogCategoryRoutes");
const brandRouter = require("./routes/brandRoutes");
const colorRouter = require("./routes/colorRoutes");
const enqRouter = require("./routes/enquiryRoutes");
const couponRouter = require("./routes/couponRoutes");
const uploadRouter = require("./routes/uploadRoutes");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
app.use("/api/upload", uploadRouter);



app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT,()=>{
  console.log(`Server listening at port ${process.env.PORT}`);
})