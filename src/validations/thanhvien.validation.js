// const Joi = require('joi');
// const { objectId } = require('./custom.validation');
import Joi from "joi"
import objectId from "./custom.validation"

const createThanhVien = {
  body: Joi.object().keys({
    HoTen: Joi.string().required(),
    GioiTinh: Joi.boolean().required(),
    NgaySinh: Joi.date().required(),
    DiaChiEmail: Joi.string().required(),
    SoDienThoai: Joi.string().required(),
    isTruongDoan: Joi.boolean().required(),
  }),
};

const getAllThanhVien = {
  query: Joi.object().keys({
    HoTen: Joi.string().optional(),
    GioiTinh: Joi.boolean().optional(),
    NgaySinh: Joi.date().optional(),
    DiaChiEmail: Joi.string().optional(),
    SoDienThoai: Joi.string().optional(),
    isTruongDoan: Joi.boolean().optional(),
  }),
};

const getThanhVienById = {
  params: Joi.object().keys({
    thanhVienId: Joi.string().custom(objectId),
  }),
};

const updateThanhVienById = {
  params: Joi.object().keys({
    thanhVienId: Joi.required().custom(objectId),
  }),
  body: Joi.object().keys({
    HoTen: Joi.string().optional(),
    GioiTinh: Joi.boolean().optional(),
    NgaySinh: Joi.date().optional(),
    DiaChiEmail: Joi.string().optional(),
    SoDienThoai: Joi.string().optional(),
    isTruongDoan: Joi.boolean().optional(),
  }),
};

const deleteThanhVienById = {
  params: Joi.object().keys({
    thanhVienId: Joi.string().custom(objectId),
  }),
};

export {
  createThanhVien,
  getAllThanhVien,
  getThanhVienById,
  updateThanhVienById,
  deleteThanhVienById,
};