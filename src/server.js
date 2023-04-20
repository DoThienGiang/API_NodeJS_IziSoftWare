import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { errorConverter, errorHandler } from "./middlewares/error.js";
import ApiError from "./utils/ApiError.js";
import httpStatus from "http-status";
import ThanhVienRoute from "../src/routers/thanhvien.route.js"
import HoatDongRoute from "../src/routers/hoatdong.route.js"
import ThamGiaRoute from "../src/routers/thamgia.route.js"
const app = express()





// mongoose.connect(MONGO_URL || 'mongodb://0.0.0.0:27017/Test_API_IziSoftWare',
//   { useNewUrlParser: true });
// mongoose.connection.once('open', function () {
//   console.log('Database connected Successfully');
// }).on('error', function (err) {
//   console.log('Error', err);
// })

mongoose.connect("mongodb://0.0.0.0:27017/Test_API_IziSoftWare", () =>
  console.log("MongoDB connection successful")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/thanhviens', ThanhVienRoute)
app.use('/hoatdongs', HoatDongRoute)
app.use('/thamgias', ThamGiaRoute)

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`listening on port http://localhost:${process.env.PORT}`)
);