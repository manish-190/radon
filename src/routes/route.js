const express = require('express');
const router = express.Router();


router.get("/test-api", function (req, res) {
    res.send("one api")
})


router.get("/test-api-2", function (req, res) {
    res.send("multiple api")
})


router.get("/test-api-3", function (req, res) {
    res.send("pls dont create multiple api")
})

router.get("/test-api-4", function(req,res){
    res.send("dont create multiple")
})

router.get("/test-api-5", function (req,res){
    res.send({a:56, b:80, msg: "hello"}) // this is json passing api

})

router.post('/test-api-6',function(req,res){
    res.send([23,45,6])
})

router.post('/test-api-7',function(req,res){
    res.send({msg: "hi", status :true})
})

router.post('/test-api-8',function(req,res){

    console.log(req.body)
    res.send({msg: "hi", status :true})
})


router.post('/test-api-9',function(req,res){
    let id = req.body.user
    let psd = req.body.password

    console.log(id,psd)

    console.log(req.body)
    res.send({msg:"hi", status:true})

})
// question take input i apost request and add it to an array and return the new array  
router.post('/test-api-10',function(req,res){
    let arr = [12,"functionup"]
    let ele = req.body.element
    arr.push(ele)

    res.send({msg: arr, status:true})
});
module.exports = router;
// 11-06-2022 day -15