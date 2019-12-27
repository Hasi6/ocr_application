import multer from "multer";


class Multer {
    storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./uploads");
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })

    upload = multer({ storage: this.storage }).single("image");
}

export default Multer;