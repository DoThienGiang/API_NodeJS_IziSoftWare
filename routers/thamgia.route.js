import { createThamGia as _createThamGia, getAllThamGia as _getAllThamGia, getThamGiaById as _getThamGiaById, updateThamGia as _updateThamGia, deleteThamGia as _deleteThamGia } from "../controllers/thamgia.controller";
import { Router } from 'express';
import validate from "../middlewares/validate";
import { createThamGia, getAllThamGia, getThamGiaById, updateThamGia, deleteThamGia } from "../validations/thamgia.validation";

const router = Router();

router
  .route('/')
  .post(validate(createThamGia), _createThamGia)
  .get(validate(getAllThamGia), _getAllThamGia)
router
  .route('/')
  .get(validate(getThamGiaById), _getThamGiaById)
  .patch(validate(updateThamGia), _updateThamGia)
  .delete(validate(deleteThamGia), _deleteThamGia)


export default router;