import httpStatus from "http-status"
import ApiError from "../utils/ApiError";
import HoatDong from "../models/hoatdong.model"

// Create a hoatDong
const createHoatDong = async (hoatDongBody) => {
    return HoatDong.create(hoatDongBody);
};

//Query for hoatDongs
const queryHoatDongs = async () => {
    const hoatDongs = await HoatDong.find();
    return hoatDongs;
};

//Get hoatDong by id
const getHoatDongById = async (id) => {
    return HoatDong.findById(id);
};

//Get hoatDong by TrangThai
const getHoatDongByTrangThai = async (TrangThai) => {
    return HoatDong.findOne({ TrangThai });
};

//Update hoatDong by id
const updateHoatDongById = async (hoatDongId, updateBody) => {
    const hoatDong = await getHoatDongById(hoatDongId);
    if (!hoatDong) {
        throw new ApiError(httpStatus.NOT_FOUND, 'HoatDong not found');
    }
    Object.assign(hoatDong, updateBody);
    await hoatDong.save();
    return hoatDong;
};

// Delete hoatDong by id
const deleteHoatDongById = async (hoatDongId) => {
    const hoatDong = await getHoatDongById(hoatDongId);
    if (!hoatDong) {
        throw new ApiError(httpStatus.NOT_FOUND, 'HoatDong not found');
    }
    await hoatDong.remove();
    return hoatDong;
};

export {
    createHoatDong,
    queryHoatDongs,
    getHoatDongById,
    getHoatDongByTrangThai,
    updateHoatDongById,
    deleteHoatDongById,
};