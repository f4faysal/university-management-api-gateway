import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';

const createStudent = async (req: Request) => {

     const file = req.file;
     const uploadImage = await FileUploadHelper.uploadToCloudinary(file);

     console.log(uploadImage)

};


export const UserService = {
     createStudent,
};