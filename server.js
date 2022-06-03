const { response } = require("express");
const _ = require("lodash");  
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");
const quotesArray=require("./quotes")

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  /* response.send(pickFromArray(quotes)); */
  
  let a =_.sample(quotes)
  response.send(a);
});

//Challengue 2

app.get("/quotes/search", function (request, response) {
  let term = request.query.term;
  function filter(arrayTOFilter) {
    const arrayFilter = arrayTOFilter
    .filter((quote) => {
      return quote.quote.includes(term);
    })
    .map((quote) => {
      return quote;
    });
  
    return arrayFilter
    
  }

  switch (term.toLowerCase()) {
    case term.toString():
     
      response.send(filter(quotes));

      break;
   

    default:
      const emptyArray=[]
      response.send(emptyArray);
      
      break;
  }
});



//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
let port = 5000;

app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
