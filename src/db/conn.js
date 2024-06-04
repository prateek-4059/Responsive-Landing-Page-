const mongoose=require("mongoose");

//creating a database
mongoose.connect("mongodb://127.0.0.1:27017/prateekdatabase",{
    // usrCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})