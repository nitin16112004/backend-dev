import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import jwt from "jsonwebtoken";


const getUser=(req)=>{
  const token=req.headers.authorization?.split(" ")[1];
  if (!token) return null;
  return jwt.verify(token,process.env.JWT_SECRET);
};


export const createPost=async (req,res)=>{
  try{
    const user=getUser(req);
    if(!user){
      return res.status(401).json({message:"Login required"});
    }

    const {title,content,tags}=req.body;

    const exist=await Post.findOne({title});
    if(exist){
      return res.status(400).json({message:"Duplicate title"});
    }

    const post=await Post.create({
      userId: user.id,
      title,
      content,
      tags
    });

    res.json(post);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};


export const getPosts=async (req,res)=>{
  try{
    const posts=await Post.find().lean();

    for(let p of posts){
      p.comments=await Comment.find({postId:p._id});
    }

    res.json(posts);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};


export const deletePost=async (req,res)=>{
  try{
    const user=getUser(req);
    if(!user){
      return res.status(401).json({message:"Login required"});
    }

    const post=await Post.findById(req.params.id);
    if(!post){
      return res.status(404).json({message:"Post not found"});
    }

    if(
      post.userId.toString()!==user.id &&
      user.role!=="admin"
    ){
      return res.status(403).json({message:"Not allowed"});
    }

    await post.deleteOne();

    res.json({message:"Post deleted"});
  }catch(err){
    res.status(500).json({message:err.message});
  }
};


export const getTrendingPosts=async (req,res)=>{
  try{
    const posts=await Post.find().lean();

    for(let p of posts){
      p.commentCount=await Comment.countDocuments({
        postId:p._id
      });
    }

    posts.sort((a,b)=>b.commentCount-a.commentCount);

    res.json(posts);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};