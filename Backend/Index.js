let Express = require("express");
require("./Db/Config");
let Model = require("./Db/SignUpModel");
let prodMod = require('./Db/AddProductModel')
let cors = require("cors");


let app = Express();
app.use(Express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let data = new Model(req.body);

  let result = await data.save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let data = await Model.findOne(req.body).select("-password -confPass");

    res.send(data);
    console.log(data)
  } else {
    res.send("Try Again");
  }
});





app.post('/addProducts', async (req, res)=>{
  let data = new prodMod(req.body);
  let result = await data.save()

  res.send(result)


})


app.get('/products', async (req, res)=>{
  let data = await prodMod.find();
  res.send(data)
  
})



app.delete('/products/:id',async (req, res)=>{
  let data  =await prodMod.deleteOne({_id:req.params.id})
  res.send(data)
})

app.listen(5000);
