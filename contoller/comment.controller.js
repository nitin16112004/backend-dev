import Comment from "../models/Comment.js";
import jwt from "jsonwebtoken";

const getUser=(req)=>{
  const token=req.headers.authorization?.split(" ")[1];
  if (!token) return null;
  return jwt.verify(token,process.env.JWT_SECRET);
};

export const addComment=async (req,res)=>{
  try{
    const user=getUser(req);
    if(!user){
      return res.status(401).json({message:"Login required"});
    }

    const {postId,comment}=req.body;

    const data=await Comment.create({
      postId,
      userId:user.id,
      comment
    });

    res.json(data);
  }catch(err){
    res.status(500).json({message:err.message});
  }
};