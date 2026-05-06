import express from "express";
import {
  createPost,
  getPosts,
  deletePost,
  getTrendingPosts
} from "../controllers/post.controller.js";

const router=express.Router();

router.post("/",createPost);
router.get("/",getPosts);
router.delete("/:id",deletePost);
router.get("/trending",getTrendingPosts);

export default router;