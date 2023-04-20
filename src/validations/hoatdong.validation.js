import Joi from "joi"
import objectId from "./custom.validation"

const createHoatDong = {
  body: Joi.object().keys({
    thanhviens: Joi.array().items(string().custom(objectId)),
    MotaHD: Joi.string().required(),
    NgayGioBD: Joi.date().required(),
    NgayGioKT: Joi.date().required(),
    SLToiThieuYC: Joi.number().required(),
    SLToiDaYC: Joi.number().required(),
    ThoiHanDK: Joi.date().required(),
    TrangThai: Joi.boolean().required(),
    LyDoHuyHD: Joi.string().required(),
  }),
};

const getAllHoatDong = {
  query: Joi.object().keys({
    thanhviens: Joi.array().items(string().custom(objectId)),
    MotaHD: Joi.string().optional(),
    NgayGioBD: Joi.date().optional(),
    NgayGioKT: Joi.date().optional(),
    SLToiThieuYC: Joi.number().optional(),
    SLToiDaYC: Joi.number().optional(),
    ThoiHanDK: Joi.date().optional(),
    TrangThai: Joi.boolean().optional(),
    LyDoHuyHD: Joi.string().optional(),
  }),
};

const getOneHoatDong = {
  params: Joi.object().keys({
    hoatdongId: Joi.string().custom(objectId),
  }),
};

const updateHoatDong = {
  params: Joi.object().keys({
    hoatdongId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    thanhviens: Joi.array().items(string().custom(objectId)),
    MotaHD: Joi.string().optional(),
    NgayGioBD: Joi.date().optional(),
    NgayGioKT: Joi.date().optional(),
    SLToiThieuYC: Joi.number().optional(),
    SLToiDaYC: Joi.number().optional(),
    ThoiHanDK: Joi.date().optional(),
    TrangThai: Joi.boolean().optional(),
    LyDoHuyHD: Joi.string().optional(),
  }),
};

const deleteHoatDong = {
  params: Joi.object().keys({
    hoatdongId: Joi.string().custom(objectId),
  }),
};

// module.exports = {
//   createHoatDong,
//   getAllHoatDong,
//   getOneHoatDong,
//   updateHoatDong,
//   deleteHoatDong
// };
export {
  createHoatDong,
  getAllHoatDong,
  getOneHoatDong,
  updateHoatDong,
  deleteHoatDong
};