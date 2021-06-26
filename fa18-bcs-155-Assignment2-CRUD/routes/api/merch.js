var express = require('express');
var router = express.Router();
var multer  = require('multer')
var {MerchModelData}= require("../../models/productModel");
var validateProduct= require("../../middlewares/validateProducts");
var auth= require("../../middlewares/auth");
var admin = require("../../middlewares/admin");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage });

router.get("/", async(req, res)=>{
    let data = await MerchModelData.find();
    return res.send(data)
})

//get single merch
router.get("/:id", async(req, res)=>{
    try {
     let data = await MerchModelData.findById(req.params.id);
     if(!data)
      return res.status(400).send("Product not found");
     return res.send(data)  
    } catch (error) {
        return res.status(400).send("Invalid ID");
        
    } 
 })
 //update
 router.put("/:id",auth,admin,validateProduct, async(req, res)=>{
     try {
      let data = await MerchModelData.findById(req.params.id);
      data.Name = req.body.Name;
      data.Anime = req.body.Anime;
      data.Type = req.body.Type;
      await data.save();
      if(!data)
       return res.status(400).send("Product not found");
      return res.send(data)  
     } catch (error) {
         return res.status(400).send("Invalid ID");
         
     } 
  })
 
 //delte
 router.delete("/:id",auth,admin,validateProduct, async(req, res)=>{
     try {
      let data = await MerchModelData.findByIdAndDelete(req.params.id); 
      if(!data)
       return res.status(400).send("Product not found");
      return res.send(data)  
     } catch (error) {
         return res.status(400).send("Invalid ID");
         
     } 
  })
 //insert
 router.put("/",auth,admin,validateProduct, upload.single('product-image'), async(req, res)=>{
      let data = new MerchModelData();
      data.Name = req.body.Name;
      data.Anime = req.body.Anime;
      data.Type = req.body.Type;
      data.Price = req.body.Price;
      data.Description = req.body.Description;
      data.Image = req.body.Image;
      await data.save();      
      return res.send(data)  
     
  })
 
 
 
 module.exports = router;
 
