require('dotenv').config();
import express, { json } from 'express';
import { connect, connection } from "mongoose";
import ThanhVienRoute from './routers/thanhvien.route';
import ThamGiaRoute from './routers/thamgia.route';
import HoatDongRoute from './routers/hoatdong.route';
const app = express();

// import {} from ''


app.use(json());

const mongoString = process.env.MONGO_URL;
// Connecting to the database
connect(mongoString);
const database = connection;
database.on('error', (error) => {
  console.log(error)
})
database.once('connected', () => {
  console.log('Database Connected');
})

// v1 api routes
app.use("/thanhvien", ThanhVienRoute);
app.use("/thamgia", ThamGiaRoute);
app.use("/hoatdong", HoatDongRoute);



app.listen(process.env.PORT, () =>
  console.log(`Server start at port http://localhost:${process.env.PORT}`)
);