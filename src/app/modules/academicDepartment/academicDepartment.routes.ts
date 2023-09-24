import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentController } from './academicDepartment.controller';
import { AcademicSemesterController } from '../academicSemester/academicSemester.controller';
import { AcademicSemesterValidation } from '../academicSemester/academicSemester.validations';
 

const router = express.Router();


router.get('/', AcademicSemesterController.getAllFromDB)
router.get('/:id', AcademicSemesterController.getByIdFromDB)
router.post(
     '/',
     validateRequest(AcademicSemesterValidation.create),
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicDepartmentController.insertIntoDB
);

router.patch(
     '/:id',
     validateRequest(AcademicSemesterValidation.update),
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicSemesterController.updateOneIntoDB
);

router.delete(
     '/:id',
     auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
     AcademicSemesterController.deleteByIdFromDB
);


export const AcademicDepartmentRoutes = router;