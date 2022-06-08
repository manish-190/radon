const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

let createBook= async(req,res) => {
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg:saveData})
}

let getBooksbyChetanBhagat = async(req,res)=>{
    let data = await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData= await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
 
}

let authorOfBook = async(req,res)=>{
    let data = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let authorData = await authorModel.find({author_id:data.author_id}).select("author_name")
    let price = data.prices
    res.send({msg:authorData,price})
}


const getBooksData= async function (req, res) {

    
}
module.exports.authorOfBookt= authorOfBook
module.exports.getBooksbyChetanBhagat= getBooksbyChetanBhagat
module.exports.createAuthor= createAuthor
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData