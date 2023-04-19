import { NOT_FOUND } from "http-status";
import { create, find, findById, findByIdAndUpdate, findByIdAndDelete } from "../models/thamgia.model";
import { findByIdAndUpdate as _findByIdAndUpdate } from "../models/hoatdong.model";
import { findByIdAndUpdate as __findByIdAndUpdate } from "../models/thanhvien.model";
import pick from "../utils/pick";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";

const createThamGia = catchAsync(async (req, res) => {
  const thamGia = await create(req.body);
  if (req.body.hoatDong?.length) {
    req.body.hoatDong.forEach(async (el) => {
      const _hoatDong = await _findByIdAndUpdate(
        el,
        {
          $push: { thamGias: thamGia.id },
        },
        { new: true }
      );
      if (!_hoatDong) throw new ApiError(NOT_FOUND, "HoatDong not found");
    });
  }
  if (req.body.thanhViens?.length) {
    req.body.thanhViens.forEach(async (el) => {
      const thanhVien = await __findByIdAndUpdate(
        el,
        {
          $push: { thamGias: thamGia.id },
        },
        { new: true }
      );
      if (!thanhVien) throw new ApiError(NOT_FOUND, "ThanhVien not found");
    });
  }
  return res.status(201).json(thamGia);
});

const getAllThamGia = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "age"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const thamGias = await find(filter, options);
  return res.status(200).json(thamGias);
});

const getThamGiaById = catchAsync(async (req, res) => {
  const thamGia = await findById(req.params.thamGiaId);
  if (!thamGia) {
    throw new ApiError(NOT_FOUND, "ThamGia not found");
  }
  return res.status(200).json(thamGia);
});

const updateThamGia = catchAsync(async (req, res) => {
  const thamGia = await findByIdAndUpdate(
    req.params.thamGiaId,
    req.body,
    {
      new: true,
    }
  );
  if (!thamGia) {
    throw new ApiError(NOT_FOUND, "ThamGia not found");
  }
  return res.status(200).json(thamGia);
});

const deleteThamGia = catchAsync(async (req, res) => {
  const thamGia = await findByIdAndDelete(req.params.thamGiaId);
  if (!thamGia) {
    throw new ApiError(NOT_FOUND, "ThamGia not found");
  } else {
    if (thamGia.hoatDong.length) {
      await Promise.all(
        thamGia.hoatDong.map(async (el) => {
          const _hoatDong = await _findByIdAndUpdate(
            el,
            {
              $pull: { thamGias: thamGia.id },
            },
            { new: true }
          );
          if (!_hoatDong) {
            throw new ApiError(NOT_FOUND, "HoatDong not found");
          }
        })
      );
    }
    if (thamGia.thanhViens.length) {
      thamGia.thanhViens.forEach(async (el) => {
        const thanhVien = await __findByIdAndUpdate(el, {
          $pull: { thamGias: thamGia.id },
        });
        if (!thanhVien)
          throw new ApiError(NOT_FOUND, "ThanhVien not found");
      });
    }
  }
  return res.status(200).json({ message: "Deleted successfully" });
});

export default {
  createThamGia,
  getAllThamGia,
  getThamGiaById,
  updateThamGia,
  deleteThamGia
};
