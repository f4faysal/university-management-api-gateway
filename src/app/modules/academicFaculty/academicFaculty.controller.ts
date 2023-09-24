import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

 

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
 
    const result = await AcademicFacultyService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

 

export const AcademicFacultyController = {
  
  insertIntoDB
};
