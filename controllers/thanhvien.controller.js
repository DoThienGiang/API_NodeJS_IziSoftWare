import { create, find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/thanhvien.model';
import { CREATED, OK, NOT_FOUND } from 'http-status';
import ApiError from '../utils/ApiError';
import catchAsync from '../utils/catchAsync';
import pick from '../utils/pick';

const createThanhVien = catchAsync(async (req, res) => {
  const thanhVien = await create(req.body);
  return res.status(CREATED).json(thanhVien);
});


const getAllThanhVien = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const thanhViens = await find(filter, options);
  return res.status(OK).json(thanhViens);
});

const getThanhVienById = catchAsync(async (req, res) => {
  const thanhVien = await findById(req.params.thanhvienId);
  if (!thanhVien) {
    throw new ApiError(NOT_FOUND, "ThanhVien not found");
  }
  return res.status(OK).json(thanhVien);
});

const updateThanhVien = catchAsync(async (req, res) => {
  const thanhVien = await findByIdAndUpdate(
    req.params.thanhVienId,
    req.body,
    {
      new: true,
    }
  );
  if (!thanhVien) {
    throw new ApiError(NOT_FOUND, "ThanhVien not found");
  }
  return res.status(200).json(thanhVien);
});

const deleteThanhVien = catchAsync(async (req, res) => {
  const thanhVien = await findByIdAndDelete(req.params.thanhVienId);
  if (!thanhVien) {
    throw new ApiError(NOT_FOUND, "ThanhVien not found");
  } else {
    return res.status(200).json({ message: "Deleted successfully" });
  }
});

export default {
  createThanhVien,
  getAllThanhVien,
  getThanhVienById,
  updateThanhVien,
  deleteThanhVien
};