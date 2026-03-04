const express=require("express");
const app=express();
const port=4000;
const tasks=require("./models/task")
const cookieParser=require("cookie-parser")
const path=require("path")
const staticRoute=require("./routes/staticrouter")
const taskRoute=require("./routes/task");
const {connecttomongoose}=require("./connections/task");
const methodOverride=require("method-override")

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(cookieParser());
app.use(express.json())


connecttomongoose(process.env.MONGO_URL).then(()=>{
  console.log("mongodb is connected")
})
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/",staticRoute);
app.use("/tasks",taskRoute);


app.listen(port,() => {
  console.log(`server chal rha ${port}`)
}
)
