import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { IClooudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {

     const file = req.file as IUploadFile
     const uploadImage : IClooudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);

     if(uploadImage){
          req.body.profileImage = uploadImage.secure_url
     }

     const {academicDepartment , academicFaculty , academicSemester } = req.body

     // const academicDepartmentResponse = await AuthService.get{`/academic-department?syncId=${academicDepartment}`}

};


export const UserService = {
     createStudent,
};