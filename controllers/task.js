const tasks=require("../models/task")
// const {setUser,getUser}=require("../service/auth");
async function createTask(req,res){
    try{
const onetask=new tasks({
    title:req.body.title,
    description:req.body.description,
    Status:req.body.status
})
await onetask.save()
  res.redirect("/")
    } catch(err){
        res.status(500).json({error:err.message})
    }
   
}
async function deleteTask(req,res){
    try{
        await tasks.findByIdAndDelete(req.params.id);
        res.redirect("/");
      
    }catch(err){
      res.status(500).json({error:err.message})
    }

}
async function updateTask(req,res){
    try{
        const updatedTask=await tasks.findByIdAndUpdate(
            req.params.id,req.body,
            {new:true}
        );
        if(!updatedTask){
            return res.status(404).json({message:"Task Not Found"})
        }
       res.redirect("/");
    } catch(error){
        res.status(500).json({error:error.message});
    }
}
module.exports={
    createTask,deleteTask,updateTask
}