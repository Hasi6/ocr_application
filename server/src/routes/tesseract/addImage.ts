import { Request, Response, Router, NextFunction } from 'express';
import Multer from '../../services/multer/multer';
import TesseractServices from '../../services/tessaract/tessaractService';

const router = Router();

const multer: Multer = new Multer();
const tesseractServices: TesseractServices = new TesseractServices();

router.post('/api/addImage', async (req: Request, res: Response, next: NextFunction) => {
    try {
        let result;
        await multer.upload(req, res, async err => {
            console.log(req.files)

            result = await tesseractServices.convert(req, res);
        });
        console.log(result)
    } catch (err) {
        console.error(err.message)
    }
})

export default router;