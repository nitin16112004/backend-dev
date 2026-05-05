// User:
// { id, name, email, passwordHash, role, createdAt }

import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    id:{
        type:String

    },
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:string,
        required:true,
    },
    role:{
        type:String,
        enum:[Admin,user]
    },
    createdAt:timeStamp()


});

export default mongoose.model("User",userSchema);