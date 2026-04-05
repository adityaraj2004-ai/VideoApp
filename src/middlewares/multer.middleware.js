import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

export const upload = multer({
    storage,
});







const storage_1 = multer.diskStorage({
destination:  function(req,file,cb){

},

filename: function(){

},
})












