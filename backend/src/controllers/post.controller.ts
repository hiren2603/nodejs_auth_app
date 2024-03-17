import { Request, Response, response } from "express";

import { Post } from "../entity/Post";
import { db } from "../db";

const postRepo = db.getRepository(Post);
export async function getAllPosts(req: Request, res: Response) {
  const posts = await postRepo.find();

  res.status(200).json(posts);
}

export async function findPostById(req: Request, res: Response) {
  const postId = +req.params.postId;
  const post = await postRepo.findOneBy({ id: postId });
  res.status(200).json(post);
}

export async function createPost(req: Request, res: Response) {
  const { title, description } = req.body;

  if ([title, description].some((field) => field.trim === "")) {
    return res.status(400).json({ error: "All fields are Required!" });
  }

  const isPostExist = await postRepo.findOne({ where: [{ title }] });

  if (isPostExist) {
    return res.status(400).json("Post already exist!");
  }
  let image_url;
  if (req.file) {
    image_url = req.file.path;
  }
  const post = new Post();
  post.title = title;
  post.description = description;
  post.post_image = image_url || "";
  const newPost = await postRepo.save(post);
  res.status(200).json(newPost);
}

export async function updatePost(req: Request, res: Response) {
  const { title, description } = req.body;
  const postId = +req.params.postId;

  const updatedPost = await postRepo.update(
    { id: postId },
    { title, description }
  );
  console.log(updatedPost);

  res.status(200).json("updating post...");
}

export function deletePost(req: Request, res: Response) {
  res.status(200).json("deleting post...");
}
