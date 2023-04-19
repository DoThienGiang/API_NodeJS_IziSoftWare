import { NOT_FOUND } from "http-status";
import { findByIdAndUpdate } from "../models/thanhvien.model";
import { create, find, findById, findByIdAndUpdate as _findByIdAndUpdate, findByIdAndDelete } from "../models/hoatdong.model";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";
import pick from "../utils/pick";


const createHoatDong = catchAsync(async (req, res) => {
  const hoatDong = await create(req.body);
  if (req.body.thanhViens?.length) {
    await Promise.all(
      req.body.thanhViens.map(async (el) => {
        const thanhVien = await findByIdAndUpdate(
          el,
          {
            $push: { hoatDongs: hoatDong.id },
          },
          { new: true }
        );
        if (!thanhVien)
          throw new ApiError(NOT_FOUND, "ThanhVien not found");
      })
    );
  }
  return res.status(201).json(hoatDong);
});

const getAllHoatDong = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name"]);
  const hoatDongs = await find(filter);
  return res.status(200).json(hoatDongs);
});

const getHoatDongById = catchAsync(async (req, res) => {
  const hoatDong = await findById(req.params.hoatDongId);
  if (!hoatDong) {
    throw new ApiError(NOT_FOUND, "HoatDong not found");
  }
  return res.status(200).json(hoatDong);
});

const updateHoatDong = catchAsync(async (req, res) => {
  const hoatDong = await _findByIdAndUpdate(req.params.hoatDongId, req.body, {
    new: true,
  });
  if (!hoatDong) {
    throw new ApiError(NOT_FOUND, "HoatDong not found");
  }
  return res.status(200).json(hoatDong);
});

const deleteHoatDong = catchAsync(async (req, res) => {
  const hoatDong = await findByIdAndDelete(req.params.hoatDongId);
  if (!hoatDong) {
    throw new ApiError(NOT_FOUND, "HoatDong not found");
  } else {
    if (hoatDong.thanhViens?.length) {
      await Promise.all(
        hoatDong.thanhViens.map(async (el) => {
          const thanhVien = await findByIdAndUpdate(
            el,
            {
              $pull: { hoatDongs: hoatDong.id },
            },
            { new: true }
          );
          if (!thanhVien)
            throw new ApiError(NOT_FOUND, "ThanhVien not found");
        })
      );
    }
  }
  return res.status(204).json();
});

export default {
  createHoatDong,
  getAllHoatDong,
  getHoatDongById,
  updateHoatDong,
  deleteHoatDong
};