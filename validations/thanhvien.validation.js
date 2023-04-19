import { object, string, boolean, date, required } from "joi";
import objectId from "./custom.validation";

const createThanhVien = {
  body: object().keys({
    HoTen: string().required(),
    GioiTinh: boolean().required(),
    NgaySinh: date().required(),
    DiaChiEmail: string().required(),
    SoDienThoai: string().required(),
    isTruongDoan: boolean().required(),
  }),
};

const getAllThanhVien = {
  query: object().keys({
    HoTen: string().required(),
    GioiTinh: boolean().required(),
    NgaySinh: date().required(),
    DiaChiEmail: string().required(),
    SoDienThoai: string().required(),
    isTruongDoan: boolean().required(),
  }),
};

const getThanhVienById = {
  params: object().keys({
    thanhvienId: string().custom(objectId),
  }),
};

const updateThanhVien = {
  params: object().keys({
    thanhvienId: required().custom(objectId),
  }),
  body: object().keys({
    HoTen: string().required(),
    GioiTinh: boolean().required(),
    NgaySinh: date().required(),
    DiaChiEmail: string().required(),
    SoDienThoai: string().required(),
    isTruongDoan: boolean().required(),
  }),
};

const deleteThanhVien = {
  params: object().keys({
    thanhvienId: string().custom(objectId),
  }),
};

export default {
  createThanhVien,
  getAllThanhVien,
  getThanhVienById,
  updateThanhVien,
  deleteThanhVien
};