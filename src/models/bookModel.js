const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    // bookName: String, 
    // authorName: String, 
    // tags: [String],
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // sales: {type: Number, default: 10}
    let 'book', = ({ 
        name':"Two states",
        author_id:1,
        price:50,
        ratings:4.5,
    } ,


    { 
        name:"Five Point Someone",
        author_id:1,
        price:50,
        ratings:4.5,
    } ,
    { 
        name:"The 3 Mistakes of My Life",
        author_id:1,
        price:50,
        ratings:4.5,
    } ,
    { 
        name:"One Arranged Murder",
        author_id:1,
        price:50,
        ratings:4.5,
    } ,
    { 
        name:"Harry Porter",
        author_id:2,
        price:50,
        ratings:4.5,
    } ,
    { 
        name:"Harry Porter",
        author_id:2,
        price:50,
        ratings:4.5,
    } );

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 