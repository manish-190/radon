const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');

const { application } = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper. getBatchInfo()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hella', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})
//1st assignment

router.get('/movie1', function(req, res){
    const movie1 = ["'The Godfather' (1972)","Casablanca' (1943)",
    "Schindler's List' (1993)","On the Waterfront",
    "On the Waterfront","The French Connection",
    "The Silence of the Lambs"]
 
    movie1.forEach(element =>{console.log(element)
    });
    res.send('here is movie list')
})


//2nd assignment


router.get('/movies/:indexNumber',function(req,res){

    const movies = ["'The Godfather' (1972)","Casablanca' (1943)",
"Schindler's List' (1993)","On the Waterfront",
"On the Waterfront","The French Connection",
"The Silence of the Lambs"]
const index = req.params.indexNumber;
let arr ={}
  arr[index] = movies[index]
res.send(arr)
})







//3rd assignment

router.get('/movies/:indexNumber',function(req,res){

        const movies = ["'The Godfather' (1972)","Casablanca' (1943)",
    "Schindler's List' (1993)","On the Waterfront",
    "On the Waterfront","The French Connection",
    "The Silence of the Lambs"]
const index = req.params.indexNumber;

if(index < movies.length){
movie = movies[index];
}else{
    movie = ("Uses a valid index")
}

 res.send(movie)
})


//4th assignment



router.get('/films', function (req, res) {
   const array1 =[ {
        "id": 1,
        "name": "The Shining"
        }, {
        "id" : 2,
        "name": "Incendies"
        }, {
        "id": 3,
        "name": "Rang de Basanti"
        }, {
        "id": 4,
        "name": "Finding Nemo"
        }]

        console.log("Return all array \n")
    res.send(array1)
});






// router.post('/players',function(req,res){
//    // let check = req.body.name;
//     let players =
//     [
//         {
//             "name": "manish",
//             "dob": "1/1/1995",
//             "gender": "male",
//             "city": "jalandhar",
//             "sports": [
//                 "swimming"
//             ]
//         },
//         {
//             "name": "gopal",
//               "dob": "1/09/1995",
//             "gender": "male",
//             "city": "delhi",
//             "sports": [
//                 "soccer"
//             ]
//         },
//         {
//             "name": "lokesh",
//             "dob": "1/1/1990",
//             "gender": "male",
//             "city": "mumbai",
//             "sports": [
//                 "soccer"
//             ]
//         },
//     ]


 
 
//     res.send('all dones')
// })
















// //akash sir assignment
// router.get('assignment1',function(req, res){

//     let arr = [1,2,3,5,6,7]
    
//     let total = 0;
//     for(let i in arr){
//         total += arr[i];
//     }

//     let lastDigit = arr.pop()

//     let consecutive_sum = lastDigit *(lastDigit+1) / 2;
//     let missing_number = consecutive_sum - total

//     res.send({data:missing_number})
// });


//alash sir assignment 2















//first assignment

// router.get('/movie1', function(req, res){
//     const movie1 = ["'The Godfather' (1972)","Casablanca' (1943)",
//     "Schindler's List' (1993)","On the Waterfront",
//     "On the Waterfront","The French Connection",
//     "The Silence of the Lambs"]
 
//     movie1.forEach(element =>{console.log(element)
//     });
//     res.send('here is movie list')
// })

// router.get('/id/:ans', function (req, res,) {
   
//    // let numbers = numbers
//     console.log(req.params.id/ans)
//     const num =[10,20,30,40,50]
//     console.log(num[numbers]) 
   
//     res.send('nuber printing')
// });



// router.get('/movie1/:indexNumber', function (req, res) {
   
//     const movie1 = ["'The Godfather' (1972)","Casablanca' (1943)",
//    "Schindler's List' (1993)","On the Waterfront",
//    "On the Waterfront","The French Connection",
//    "The Silence of the Lambs"]
//    let indexNumber = req

//    console.log("movie index number",(movie1[indexNumber]))

//    res.send('please enter movie index number')
// });


module.exports = router;
// adding this comment for no reason