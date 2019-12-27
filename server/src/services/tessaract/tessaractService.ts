import { TesseractWorker } from "tesseract.js";
import { Request, Response } from 'express';
import fs from "fs";
import path from 'path'
import mongoose from 'mongoose';
import SaveImage from '../../database/tessaract/SaveImage';
const Images = mongoose.model('images')


const worker: TesseractWorker = new TesseractWorker();
const saveImage: SaveImage = new SaveImage();

class TesseractServices {

    convert: Function = (req: Request, res: Response) => {
        fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
            console.log(data)
            if (err) return console.log(`this is a error ${err.message}`);
            worker
                .recognize(data, "eng", { tessjs_create_pdf: "1" })
                .progress((p: string) => console.log(p))
                .then(async (result: any) => {
                    await saveImage.saveImageDatabase(req, result)
                    fs.unlinkSync(`./uploads/${req.file.originalname}`);
                    return res.json({ result: result.text });
                })
                .finally(() => worker.terminate());
        });
    }


}

export default TesseractServices;