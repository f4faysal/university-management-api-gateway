import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
     cloud_name: 'dhvuyehnq',
     api_key: '877487346738372',
     api_secret: 'ToOxkCHyEuCqfys6x7tiZo5TSMw'
});



const uploadToCloudinary = async (file: any) => {

     cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
          { public_id: "olympic_flag" },
          function (error, result) { console.log(result); });

};

export const FileUploadHelper = {
     uploadToCloudinary
};