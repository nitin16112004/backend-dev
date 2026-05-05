// Comment:
// { id, postId, userId, comment, createdAt }

import mongoose from "mongoose";


const postSchema=new mongoose.Schema({
    id:{
        type:String
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,    
        required:true
    },
    comment:{ 
        type:String,    
        required:true
    },
    createdAt:timeStamp()
});
export default mongoose.model("Post",postSchema);