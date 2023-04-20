import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync";
import thanhVienService from "../services/thanhvien.service"

const createThanhVien = catchAsync(async (req, res) => {
    const thanhVien = await thanhVienService.createThanhVien(req.body);
    res.status(httpStatus.CREATED).send(thanhVien);
});

const getThanhViens = catchAsync(async (req, res) => {
    const result = await thanhVienService.queryThanhViens();
    res.send(result);
});

const getThanhVien = catchAsync(async (req, res) => {
    const thanhVien = await thanhVienService.getThanhVienById(req.params.thanhVienId);
    if (!thanhVien) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ThanhVien not found');
    }
    res.send(thanhVien);
});

const updateThanhVien = catchAsync(async (req, res) => {
    const thanhVien = await thanhVienService.updateThanhVienById(req.params.thanhVienId, req.body);
    res.send(thanhVien);
});

const deleteThanhVien = catchAsync(async (req, res) => {
    await thanhVienService.deleteThanhVienById(req.params.thanhVienId);
    res.status(httpStatus.NO_CONTENT).send();
});

export {
    createThanhVien,
    getThanhViens,
    getThanhVien,
    updateThanhVien,
    deleteThanhVien,
};