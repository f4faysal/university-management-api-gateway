import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { IClooudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'dhvuyehnq',
  api_key: '877487346738372',
  api_secret: 'ToOxkCHyEuCqfys6x7tiZo5TSMw'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<IClooudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: IClooudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
