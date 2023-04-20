import httpStatus from "http-status";
import ApiError from "../utils/ApiError.js";
import catchAsync from "../utils/catchAsync";
import thamGiaService from ('../services/thamgia.service');

const createThamGia = catchAsync(async (req, res) => {
    const thamGia = await thamGiaService.createThamGia(req.body);
    res.status(httpStatus.CREATED).send(thamGia);
});

const getThamGias = catchAsync(async (req, res) => {
    const result = await thamGiaService.queryThamGias();
    res.send(result);
});

const getThamGia = catchAsync(async (req, res) => {
    const thamGia = await thamGiaService.getThamGiaById(req.params.thamGiaId);
    if (!thamGia) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ThamGia not found');
    }
    res.send(thamGia);
});

const updateThamGia = catchAsync(async (req, res) => {
    const thamGia = await thamGiaService.updateThamGiaById(req.params.thamGiaId, req.body);
    res.send(thamGia);
});

const deleteThamGia = catchAsync(async (req, res) => {
    await thamGiaService.deleteThamGiaById(req.params.thamGiaId);
    res.status(httpStatus.NO_CONTENT).send();
});

export {
    createThamGia,
    getThamGias,
    getThamGia,
    updateThamGia,
    deleteThamGia,
};
