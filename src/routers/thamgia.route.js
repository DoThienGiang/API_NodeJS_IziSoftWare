import { express } from 'express';
import thamGiaController from '../controllers/thamgia.controller';

const router = express.Router();

router
    .route('/')
    .post(thamGiaController.createThamGia)
    .get(thamGiaController.getThamGias);

router
    .route('/:thamGiaId')
    .get(thamGiaController.getThamGia)
    .patch(thamGiaController.updateThamGia)
    .delete(thamGiaController.deleteThamGia);

export default router;