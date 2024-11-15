import express from "express";
import { createAdmin,createAlumni, createstudent, getAllUsers } from '../controllers/usercontroller.js';
import { createCompany, getAllCompanies } from '../controllers/companyController.js';
import {createReview,getAllReviews} from '../controllers/reviewscontroller.js'
import { likeReviews } from '../controllers/likesController.js';
import { isAdmin } from "../middleware/Middleware.js";

const router = express.Router()
//post_api
router.post("/admin/create",createAdmin);
router.post("/alumni/create",createAlumni);
router.post("/student/create",createstudent);
router.post("/company/create",isAdmin,createCompany);
router.post("/review/create",createReview);
router.post("/like/add",likeReviews);

//get_api
router.get("/user/get",getAllUsers);
router.get("/company/get",getAllCompanies);

export default router;