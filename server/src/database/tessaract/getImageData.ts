import mongoose from 'mongoose';
import { Request } from 'express';
import fs from "fs";

const Images = mongoose.model('images')


class GetImageData {

    getImage: Function = async (req: Request) => {
        try {
            const oldImage = await Images.findOne({ img: fs.readFileSync(`./uploads/${req.file.originalname}`) })
            return oldImage;
        } catch (err) {
            console.error(err.message);
        }
    }
}

export default GetImageData;