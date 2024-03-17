import { Router } from "express";
import {
  createPost,
  findPostById,
  getAllPosts,
  updatePost,
} from "../controllers/post.controller";
import { upload } from "../middlewares/multer.middleware";
// import { varifyToken } from "../middlewares/user.middleware";

const router = Router();

router.route("/").get(getAllPosts);
router.route("/:postId").get(findPostById);
router.route("/create").post(upload.single("post_image"), createPost);
router.route("/update/:postId").patch(updatePost);

export default router;
