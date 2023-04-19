import { Router } from 'express';
import validate from "../middlewares/validate";
import { createHoatDong as _createHoatDong, getAllHoatDong as _getAllHoatDong, getHoatDongById as _getHoatDongById, updateHoatDong as _updateHoatDong, deleteHoatDong as _deleteHoatDong } from "../controllers/hoatdong.controller";
import { createHoatDong, getAllHoatDong, getHoatDongById, updateHoatDong, deleteHoatDong } from "../validations/hoatdong.validation";



const router = Router();

router
  .route('/')
  .post(validate(createHoatDong), _createHoatDong)
  .get(validate(getAllHoatDong), _getAllHoatDong)
router
  .route('/')
  .get(validate(getHoatDongById), _getHoatDongById)
  .patch(validate(updateHoatDong), _updateHoatDong)
  .delete(validate(deleteHoatDong), _deleteHoatDong)


export default router;
