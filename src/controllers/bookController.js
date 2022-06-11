const BookModel= require("../models/bookModel")
const BookModel= require("../models/authorModel")
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}


const author = async function (req, res) {
    let book_name= await bookModel.find({ author_id: req.body.author_id }).select({bookName:1,_id:0})
    res.send(book_name)
 }


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData