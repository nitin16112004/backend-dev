// Post:

// { id, userId, title, content, tags[], createdAt }

import mongoose from "mongoose";


const postSchema=new mongoose.Schema({
    id:{
        type:String
    },
    userId:{
        type:String,    
        required:true
    },
    title:{ 
        type:String,    
        required:true
    },  
    content:{
        type:String,    
        required:true   
    },
    tags:{
        type:[String]
    },
    createdAt:timeStamp()
});
export default mongoose.model("Post",postSchema);
