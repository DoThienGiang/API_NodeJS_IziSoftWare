import Joi from "joi"
import objectId from "./custom.validation"


const createThamGia = {
  body: Joi.object().keys({
    hoatdongs: Joi.array().items(string().custom(objectId)),
    thanhviens: Joi.array().items(string().custom(objectId)),
    NgayGioDangKy: Joi.date().required(),
    DiemTruongDoan: Joi.number().required(),
    DiemTieuChi1: Joi.number().required(),
    DiemTieuChi2: Joi.number().required(),
    DiemTieuChi3: Joi.number().required(),
    NhanXetKhac: Joi.string().required(),
  }),
};

const getAllThamGia = {
  query: Joi.object().keys({
    hoatdongs: Joi.string().custom(objectId),
    thanhviens: Joi.string().custom(objectId),
    NgayGioDangKy: Joi.date().optional(),
    DiemTruongDoan: Joi.number().optional(),
    DiemTieuChi1: Joi.number().optional(),
    DiemTieuChi2: Joi.number().optional(),
    DiemTieuChi3: Joi.number().optional(),
    NhanXetKhac: Joi.string().optional(),
  }),
};


const getOneThamGia = {
  params: Joi.object().keys({
    thamgiaId: Joi.string().custom(objectId),
  }),
};

const updateThamGia = {
  params: Joi.object().keys({
    thamgiaId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    hoatdongs: Joi.array().items(string().custom(objectId)),
    thanhviens: Joi.array().items(string().custom(objectId)),
    NgayGioDangKy: Joi.date().optional(),
    DiemTruongDoan: Joi.number().optional(),
    DiemTieuChi1: Joi.number().optional(),
    DiemTieuChi2: Joi.number().optional(),
    DiemTieuChi3: Joi.number().optional(),
    NhanXetKhac: Joi.string().optional(),
  }),
};

const deleteThamGia = {
  params: Joi.object().keys({
    thamgiaId: Joi.string().custom(objectId),
  }),
};

// module.exports = {
//   createThamGia,
//   getAllThamGia,
//   getOneThamGia,
//   updateThamGia,
//   deleteThamGia
// };
export {
  createThamGia,
  getAllThamGia,
  getOneThamGia,
  updateThamGia,
  deleteThamGia
};