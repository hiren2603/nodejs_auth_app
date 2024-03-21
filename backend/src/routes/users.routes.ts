import { Router } from "express";
import {
  ragister,
  login,
  getAllUsers,
  logoutUser,
  deleteUser,
  findUserById,
} from "../controllers/user.controller";
import { varifyToken } from "../middlewares/user.middleware";
import { upload } from "../middlewares/multer.middleware";

const router = Router();

router.route("/ragister").post(upload.single("avatar"), ragister);
router.route("/login").post(login);
router.route("/").get(varifyToken, getAllUsers);
router.route("/logout").post(logoutUser);
router.route("/delete/:userId").delete(varifyToken, deleteUser);
router.route("/:userId").get(varifyToken, findUserById);

export default router;
