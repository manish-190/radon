const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
name:{
    type:String,
},
author_id:{
    type:String,
    required:true
},
prices:Number,
ratings:Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 



// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10}
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
