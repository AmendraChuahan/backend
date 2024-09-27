const express= require ('express');
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");
app.get('/',function(req,res){
    res.send("hey");


})
app.get("/create", async function (req,res){
   let user =  await  usermodel.create({
        username :"monu",
        age:25,
        email:"amendra@gamil.com"

    });
    res.send(user);
}) 
 app.get("/post/create",async function (req,res){
 let post = await postmodel.create({
    postdata:"hello bhai kese hia ",
    user:"66f5bb6597d9ef616d8af016"

  })
  let user = await usermodel.findOne({_id:"66f5bb6597d9ef616d8af016"});
  user.posts.push(post._id);
   await user.save();
  res.send({post,user});
 }) 
app.listen(3000);