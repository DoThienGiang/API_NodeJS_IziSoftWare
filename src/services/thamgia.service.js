import httpStatus from "http-status"
import ApiError from "../utils/ApiError";
import ThamGia from "../models/thamgia.model"


const createThamGia = async (thamGiaBody) => {
    return ThamGia.create(thamGiaBody);
};


const queryThamGias = async () => {
    const thamGias = await ThamGia.find();
    return thamGias;
};


const getThamGiaById = async (id) => {
    return ThamGia.findById(id);
};


const getThamGiaByDiemTruongDoan = async (DiemTruongDoan) => {
    return ThamGia.findOne({ DiemTruongDoan });
};


const updateThamGiaById = async (thamGiaId, updateBody) => {
    const thamGia = await getThamGiaById(thamGiaId);
    if (!thamGia) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ThamGia not found');
    }
    Object.assign(thamGia, updateBody);
    await thamGia.save();
    return thamGia;
};


const deleteThamGiaById = async (thamGiaId) => {
    const thamGia = await getThamGiaById(thamGiaId);
    if (!thamGia) {
        throw new ApiError(httpStatus.NOT_FOUND, 'ThamGia not found');
    }
    await thamGia.remove();
    return thamGia;
};

export {
    createThamGia,
    queryThamGias,
    getThamGiaById,
    getThamGiaByDiemTruongDoan,
    updateThamGiaById,
    deleteThamGiaById,
};