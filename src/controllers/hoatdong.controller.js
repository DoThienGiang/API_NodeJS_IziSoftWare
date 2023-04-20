import httpStatus from "http-status";
import ApiError from "../utils/ApiError";
import catchAsync from "../utils/catchAsync";
import hoatDongService from '../services/hoatdong.service.js';

const createHoatDong = catchAsync(async (req, res) => {
    const hoatDong = await hoatDongService.createHoatDong(req.body);
    res.status(httpStatus.CREATED).send(hoatDong);
});

const getAllHoatDong = catchAsync(async (req, res) => {
    const result = await hoatDongService.queryHoatDongs();
    res.send(result);
});

const getOneHoatDong = catchAsync(async (req, res) => {
    const hoatDong = await hoatDongService.getHoatDongById(req.params.hoatDongId);
    if (!hoatDong) {
        throw new ApiError(httpStatus.NOT_FOUND, 'HoatDong not found');
    }
    res.send(hoatDong);
});

const updateHoatDong = catchAsync(async (req, res) => {
    const hoatDong = await hoatDongService.updateHoatDongById(req.params.hoatDongId, req.body);
    res.send(hoatDong);
});

const deleteHoatDong = catchAsync(async (req, res) => {
    await hoatDongService.deleteHoatDongById(req.params.hoatDongId);
    res.status(httpStatus.NO_CONTENT).send();
});

export {
    createHoatDong,
    getAllHoatDong,
    getOneHoatDong,
    updateHoatDong,
    deleteHoatDong,
};