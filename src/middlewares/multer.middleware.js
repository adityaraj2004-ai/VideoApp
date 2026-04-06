import multer from "multer";


// This middleware is used to extract uploaded files from the request and store them temporarily on your server
// 👉 Express cannot handle file uploads properly
// Because:
// Files come as raw binary (multipart/form-data)
// Express only understands JSON by default


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // folder path
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

export const upload = multer({
    storage,
});





