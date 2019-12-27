import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    img: { type: Buffer },
    result: { type: String, required: true }
})

export default mongoose.model("images", ImageSchema);