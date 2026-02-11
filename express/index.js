import express from "express";
import createUser from "./exersice/user.js";
import filterUsers from "./exersice/ex1.js";
import responceTime from "./exersice/ex2.js";
let port=8080;

const app=express();
app.use(express.json());
app.use(responceTime);

app.post("/users",createUser);
app.get("/users/:name",filterUsers);

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})
