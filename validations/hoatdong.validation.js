import { object, array, string, date, number, boolean, required } from "joi";
import objectId from "./custom.validation";

const createHoatDong = {
  body: object().keys({
    thanhviens: array().items(string().custom(objectId)),
    MotaHD: string().required(),
    NgayGioBD: date().required(),
    NgayGioKT: date().required(),
    SLToiThieuYC: number().required(),
    SLToiDaYC: number().required(),
    ThoiHanDK: date().required(),
    TrangThai: boolean().required(),
    LyDoHuyHD: string().required(),
  }),
};

const getAllHoatDong = {
  query: object().keys({
    MotaHD: string().required(),
    NgayGioBD: date().required(),
    NgayGioKT: date().required(),
    SLToiThieuYC: number().required(),
    SLToiDaYC: number().required(),
    ThoiHanDK: date().required(),
    TrangThai: boolean().required(),
    LyDoHuyHD: string().required(),
  }),
};

const getHoatDongById = {
  params: object().keys({
    hoatdongId: string().custom(objectId),
  }),
};

const updateHoatDong = {
  params: object().keys({
    hoatdongId: required().custom(objectId),
  }),
  body: object().keys({
    MotaHD: string().required(),
    NgayGioBD: date().required(),
    NgayGioKT: date().required(),
    SLToiThieuYC: number().required(),
    SLToiDaYC: number().required(),
    ThoiHanDK: date().required(),
    TrangThai: boolean().required(),
    LyDoHuyHD: string().required(),
    thanhviens: array().items(string().custom(objectId)),
  }),
};

const deleteHoatDong = {
  params: object().keys({
    hoatdongId: string().custom(objectId),
  }),
};

export default {
  createHoatDong,
  getAllHoatDong,
  getHoatDongById,
  updateHoatDong,
  deleteHoatDong
};