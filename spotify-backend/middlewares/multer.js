import multer from 'multer'


// extract song data and other data which came from the frontend
const storage = multer.diskStorage({
    filename:function (req,file,callback){
        callback(null,file.originalname)
    }
});

const upload = multer({storage});

export default upload;