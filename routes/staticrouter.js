const express=require("express");
const router=express();
const tasks=require("../models/task");

router.get("/",async(req,res) => {
const alltasks=await tasks.find({})

  res.render("tasks",{
   task:alltasks,
  })
})
// router.get("/tasks/:id",(req,res)=>{
// res.redirect("/")
// })




module.exports=router;