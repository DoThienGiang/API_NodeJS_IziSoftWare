import { express } from 'express';
import hoatDongController from "../controllers/hoatdong.controller"

const router = express.Router();

router
    .route('/')
    .post(hoatDongController.createHoatDong)
    .get(hoatDongController.getAllHoatDong);

router
    .route('/:hoatDongId')
    .get(hoatDongController.getOneHoatDong)
    .patch(hoatDongController.updateHoatDong)
    .delete(hoatDongController.deleteHoatDong);

export default router;