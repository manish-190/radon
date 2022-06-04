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

//Q1.
   // -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] 

// router.get("/missing", function (req, res) {
// let arr= [1,2,3,5,6,7]
 
// let total = 0;
// for (var i in arr) {
//     total += arr[i];
// }

// let lastDigit= arr.pop()
// let consecutiveSum= lastDigit * (lastDigit+1) / 2  //28
// let missingNumber= consecutiveSum - total

// res.send(  { data: missingNumber  }  );
// });


  // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
router.get("/missing_number", function (req, res) {
let arr= [33, 34, 35, 37, 38] //150+27 =177
let len= arr.length

let total = 0;
for (var i in arr) {
    total += arr[i];
}

let firstDigit= arr[0]
let lastDigit= arr.pop()
let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2 //33+38 =71
let missingNumber= consecutiveSum - total

res.send(  { data: missingNumber  }  );
});

module.exports = router;
// adding this comment for no reason