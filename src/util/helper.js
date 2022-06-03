// const printDate = function() {
//     let currentDate = new Date()
//     console.log(currentDate)    
//     console.log('\n')
// }

// const printMonth = function() {
//     let currentdate = new Date()
//     let currentMonth = currentdate.getMonth() + 1
//     console.log('The current month is '+currentMonth)
// }

// const getBatchInfo = function() {
//   let batchInformation = 'Radon, W3D4, the topic for today is Nodejs module system assignment discussion'
//   console.log(batchInformation)
// }

let printDate = function(){
    
  let players =
  [
      {
          "name": "manish",
          "dob": "1/1/1995",
          "gender": "male",
          "city": "jalandhar",
          "sports": [
              "swimming"
          ]
      },
      {
          "name": "gopal",
            "dob": "1/09/1995",
          "gender": "male",
          "city": "delhi",
          "sports": [
              "soccer"
          ]
      },
      {
          "name": "lokesh",
          "dob": "1/1/1990",
          "gender": "male",
          "city": "mumbai",
          "sports": [
              "soccer"
          ]
      },
  ]
}

 module.exports.printDate = printDate
// module.exports.getCurrentMonth = printMonth
// module.exports. getBatchInfo = getBatchInfo
