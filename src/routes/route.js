const express = require('express');
const router = express.Router();
const userModel = require("../models/userModel.js");


router.get("/test-api", function (req, res) {
    res.send("one api")
})

router.post('/createUser',async function(req,res){
    let data = req.body
   let saveData = await userModel.create(data)
res.send({msg:saveData})
})


// user data post data 
router.get('/getUsersData',async function(req,res){
    let allUsers = await userModel.find()
    res.send({msg:allUsers})
} )
module.exports = router;
