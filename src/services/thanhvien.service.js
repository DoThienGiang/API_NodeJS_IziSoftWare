// const httpStatus = require('http-status');
// const ThanhVien = require('../models/thanhvien.model');
// const ApiError = require('../utils/ApiError');
import httpStatus from "http-status"
import ApiError from "../utils/ApiError";
import ThanhVien from "../models/thanhvien.model"

//Create a thanhVien
const createThanhVien = async (thanhVienBody) => {
  return ThanhVien.create(thanhVienBody);
};

//Query for thanhViens
const queryThanhViens = async () => {
  const thanhViens = await ThanhVien.find();
  return thanhViens;
};

// Get thanhVien by id
const getThanhVienById = async (id) => {
  return ThanhVien.findById(id);
};

//Get thanhVien by HoTen
const getThanhVienByHoTen = async (HoTen) => {
  return ThanhVien.findOne({ HoTen });
};

// Update thanhVien by id
const updateThanhVienById = async (thanhVienId, updateBody) => {
  const thanhVien = await getThanhVienById(thanhVienId);
  if (!thanhVien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ThanhVien not found');
  }
  Object.assign(thanhVien, updateBody);
  await thanhVien.save();
  return thanhVien;
};

//Delete thanhVien by id
const deleteThanhVienById = async (thanhVienId) => {
  const thanhVien = await getThanhVienById(thanhVienId);
  if (!thanhVien) {
    throw new ApiError(httpStatus.NOT_FOUND, 'ThanhVien not found');
  }
  await thanhVien.remove();
  return thanhVien;
};

export {
  createThanhVien,
  queryThanhViens,
  getThanhVienById,
  getThanhVienByHoTen,
  updateThanhVienById,
  deleteThanhVienById,
};