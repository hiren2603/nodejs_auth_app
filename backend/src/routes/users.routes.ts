import { Router } from "express";
import {
  ragister,
  login,
  getAllUsers,
  logoutUser,
  deleteUser,
} from "../controllers/user.controller";
import { varifyToken } from "../middlewares/user.middleware";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.route("/ragister").post(upload.single("avatar"), ragister);
router.route("/login").post(login);
router.route("/").get(varifyToken, getAllUsers);
router.route("/logout").post(varifyToken, logoutUser);
router.route("/delete/:userId").delete(deleteUser);

export default router;
