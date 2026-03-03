const mongoose=require("mongoose")
async function connecttomongoose(url){
   return mongoose.connect(url);
}
module.exports={
    connecttomongoose
}