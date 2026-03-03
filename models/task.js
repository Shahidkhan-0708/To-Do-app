const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
    },
    description:{
     
        type:String,
    },
    Status:{
     required:true,
     type:String,
    }
},{timestamps:true})
const tasks=mongoose.model("task",taskSchema)
module.exports= tasks;