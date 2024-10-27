import express from "express";
import dotenv from "dotenv";
import connectToDB from "./database/db.js";
import { Todo } from "./models/todo.model.js";
dotenv.config();
const app = express();
const port = process.env.port || 4000;
k
//-------------------
app.use(express.json());

connectToDB();
//todo api
app.get("/todos",async(req,res)=>{
    try{
        const result = await Todo.find()
        res.send({
            success: true,
            massage: "Todo Lists Retreved Successfully",
            data: result
        })
    }catch(error){
        res.send({
            success: false,
            massage: "Failed to rerived  Todo Lists successfully",
            data: result
        })  

    }
})

app.post("/create-todo", async(req,res) =>{
    const todoDetails = req.body
    try {
        const result = await Todo.create(todoDetails)
        res.send({
            success: true,
            massage: "Todo Created Successfully",
            data: result
        }) 
    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            massage: "Faild to create todo",
            data: result
        })
    }
})

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ${port}`);
} );kt