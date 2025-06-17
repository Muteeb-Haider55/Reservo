import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserData, stroreRecentSearchedCities } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, stroreRecentSearchedCities);


export default userRouter;