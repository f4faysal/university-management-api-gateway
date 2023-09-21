import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

cloudinary.config({
     cloud_name: 'dhvuyehnq',
     api_key: '877487346738372',
     api_secret: 'ToOxkCHyEuCqfys6x7tiZo5TSMw'
});

const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, 'uploads/')
     },
     filename: function (req, file, cb) {
          cb(null, file.originalname)
     }
});

const upload = multer({ storage: storage })

const uploadToCloudinary = async (file: any) => {

     cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
          { public_id: "olympic_flag" },
          function (error, result) { console.log(result); });

};

export const FileUploadHelper = {
     uploadToCloudinary,
     upload
};