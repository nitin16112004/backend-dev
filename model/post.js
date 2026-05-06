import mongoose from "mongoose";

const postSchema=new mongoose.Schema(
  {
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },
    title:{
      type:String,
      unique:true,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    tags:[String]
  },
  {timestamps:true}
);

export default mongoose.model("Post",postSchema);