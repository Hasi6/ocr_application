import { TesseractWorker } from "tesseract.js";
import fs from "fs";
import path from 'path'
import mongoose from 'mongoose';
const Images = mongoose.model('images')


const worker: TesseractWorker = new TesseractWorker();

class TesseractServices {

    convert: Function = (req: any, res: any) => {
        fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
            console.log(data)
            if (err) return console.log(`this is a error ${err.message}`);
            worker
                .recognize(data, "eng", { tessjs_create_pdf: "1" })
                .progress((p: any) => console.log(p))
                .then(async (result: any) => {

                    let oldImage = await Images.findOne({ img: fs.readFileSync(`./uploads/${req.file.originalname}`) })
                    console.log(oldImage)

                    let newImage: any = new Images()
                    newImage.img = fs.readFileSync(`./uploads/${req.file.originalname}`),
                        newImage.result = result.text
                    await newImage.save()
                    fs.unlinkSync(`./uploads/${req.file.originalname}`);
                    return res.json({ result: result.text });
                })
                .finally(() => worker.terminate());
        });
    }


}

export default TesseractServices;