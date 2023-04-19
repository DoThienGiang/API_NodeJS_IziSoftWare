
import thanhVienController from "../controllers/thanhvien.controller";
import {
  getThanhVienById,
  updateThanhVien,
  deleteThanhVien,
  getAllThanhVien,
  createThanhVien,
} from "../validations/thanhvien.validation";
import validate from "../middlewares/validate";

const router = Router();

router
  .route(`/`)
  .get(validate(getAllThanhVien), thanhVienController.getAllThanhVien)
  .post(validate(createThanhVien), thanhVienController.createThanhVien);
router
route(`/:thanhVienId`)
  .get(validate(getThanhVienById), thanhVienController.getThanhVienById)
  .patch(validate(updateThanhVien), thanhVienController.updateThanhVien)
  .delete(validate(deleteThanhVien), thanhVienController.deleteThanhVien);


export default router;