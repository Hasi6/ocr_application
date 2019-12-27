import mongoose from 'mongoose';
import fs from "fs";
import { Request } from 'express';
const Images = mongoose.model('images')

class SaveImage {

    saveImageDatabase: Function = async (req: Request, result: any) => {
        try {
            let newImage: any = new Images({ img: fs.readFileSync(`./uploads/${req.file.originalname}`), result: result.text })
            await newImage.save();
            return;
        } catch (err) {
            console.error(err.message)
        }
    }
}

export default SaveImage;