const express=require("express");
const path=require("path");
require("./db/conn");
const User=require("./models/usermessage")
const hbs=require("hbs");
const app=express();
const port=process.env.PORT || 4000;

//setting the path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/css',express.static(path.join(__dirname,"../node_modules/jquery/dist")));


app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set('view engine',"hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/contact',(req,res)=>{
    res.render("contact");
})

app.post("/contact",async(req,res)=>{
    try{
        // res.send(req.body)
        const UserData = new User(req.body);
        await UserData.save();
        res.status(201).render("/"); 
    }catch(err){
        res.status(500).send(err);
    }
})

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})