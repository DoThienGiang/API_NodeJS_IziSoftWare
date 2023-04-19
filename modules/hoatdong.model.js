import mongoose from "mongoose";

const hoatdongSchema = new mongoose.Schema(
    {
        thanhviens: [{
            type: Schema.Types.ObjectId,
            ref: "ThanhVien"
        }],
        MotaHD: {
            type: String,
            trim: true,
            required: true,
        },
        NgayGioBD: {
            type: Date,
            max: new Date(),
            required: true,
        },
        NgayGioKT: {
            type: Date,
            max: new Date(),
            required: true,
        },
        SLToiThieuYC: {
            type: Number,
            required: true,
            unique: true
        },
        SLToiDaYC: {
            type: Number,
            required: true,
            unique: true
        },
        ThoiHanDK: {
            type: Date,
            max: new Date(),
            required: true,
        },
        TrangThai: {
            type: Boolean,
            required: true,
            unique: true
        },
        LyDoHuyHD: {
            type: String,
            required: true,
            unique: true
        },
    }
);

const HoatDong = mongoose.model("HoatDong", hoatdongSchema);

export default HoatDong;
