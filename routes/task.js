const express=require("express");
const router=express();
const {createTask,deleteTask,updateTask}=require("../controllers/task")
router.post("/add",createTask);
router.delete("/:id",deleteTask)
router.put("/:id",updateTask);

module.exports=router;