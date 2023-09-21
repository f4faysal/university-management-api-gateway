import { NextFunction, Request, Response } from 'express';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
     try {
          // const result = await UserService.createStudent(req);
          // sendResponse(res, result);

          console.log(req.file, req.body, req.files)

          res.send("hello")
     }
     catch (error) {
          next(error)
     }
};


export const UserController = {
     createStudent,
};
