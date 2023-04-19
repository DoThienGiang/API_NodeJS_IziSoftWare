import { object, array, string, date, number, required } from "joi";
import objectId from "./custom.validation";


const createThamGia = {
  body: object().keys({
    hoatdongs: array().items(string().custom(objectId)),
    thanhviens: array().items(string().custom(objectId)),
    NgayGioDangKy: date().required(),
    DiemTruongDoan: number().required(),
    DiemTieuChi1: number().required(),
    DiemTieuChi2: number().required(),
    DiemTieuChi3: number().required(),
    NhanXetKhac: string().required(),
  }),
};

const getAllThamGia = {
  query: object().keys({
    hoatdongs: string().custom(objectId),
    thanhviens: string().custom(objectId),
    NgayGioDangKy: date().required(),
    DiemTruongDoan: number().required(),
    DiemTieuChi1: number().required(),
    DiemTieuChi2: number().required(),
    DiemTieuChi3: number().required(),
    NhanXetKhac: string().required(),
  }),
};


const getThamGiaById = {
  params: object().keys({
    thamgiaId: string().custom(objectId),
  }),
};

const updateThamGia = {
  params: object().keys({
    thamgiaId: required().custom(objectId),
  }),
  body: object().keys({
    hoatdongs: array().items(string().custom(objectId)),
    thanhviens: array().items(string().custom(objectId)),
    NgayGioDangKy: date().required(),
    DiemTruongDoan: number().required(),
    DiemTieuChi1: number().required(),
    DiemTieuChi2: number().required(),
    DiemTieuChi3: number().required(),
    NhanXetKhac: string().required(),
  }),
};

const deleteThamGia = {
  params: object().keys({
    thamgiaId: string().custom(objectId),
  }),
};

export default {
  createThamGia,
  getAllThamGia,
  getThamGiaById,
  updateThamGia,
  deleteThamGia
};
