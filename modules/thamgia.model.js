import mongoose from "mongoose";

const thamgiaSchema = new mongoose.Schema(
    {
        thanhviens: [
            {
                type: Schema.Types.ObjectId,
                ref: "ThanhVien"
            }
        ],
        hoatdongs: [
            {
                type: Schema.Types.ObjectId,
                ref: "HoatDong"
            }
        ],
        NgayGioDangKy: {
            type: Date,
            max: new Date(),
            required: true,
        },
        DiemTruongDoan: {
            type: Number,
            required: true,
        },
        DiemTieuChi1: {
            type: Number,
            required: true,
        },
        DiemTieuChi2: {
            type: Number,
            required: true,
        },
        DiemTieuChi3: {
            type: Number,
            required: true,
        },
        NhanXetKhac: {
            type: String,
            required: true,
        },
    }
);

const ThamGia = mongoose.model("ThamGia", thamgiaSchema);

export default ThamGia;
