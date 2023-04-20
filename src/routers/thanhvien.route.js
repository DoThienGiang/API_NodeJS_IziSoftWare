import { express } from 'express';
import thanhVienController
  from "../controllers/thanhvien.controller"

const router = express.Router();

router
  .route('/')
  .post(thanhVienController.createThanhVien)
  .get(thanhVienController.getThanhViens);

router
  .route('/:thanhVienId')
  .get(thanhVienController.getThanhVien)
  .patch(thanhVienController.updateThanhVien)
  .delete(thanhVienController.deleteThanhVien);

export default router;