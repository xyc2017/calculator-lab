require('dotenv').config()
const express = require('express')
const app = express()

//put in a route called calc takes in 2 parameters and a query or operation

app.get('/calc/:num1/:num2', (request, response)=>{
    //console.log(request.params.num1, request.params.num2), this is a test to ensure we have the correct pathing
    //anything typed inside the URL will always be a string
    const num1=parseInt(request.params.num1)
    const num2=parseInt(request.params.num2) //parseInt turns strings into integer
    if(request.query.operation==='add'){
        response.send(`the sum is ${num1+num2}`)
    } else if (request.query.operation==='subtract'){
        response.send(`the sum is ${num1-num2}`)  
    }else if (operation === "multiply") {
        response.send(`the multiply value is ${num1 * num2}`);
    } else if (operation === "divide") {
        response.send(`the divide value is ${num1 / num2}`);
    } else if (operation === "exponent") {
        response.send(`the exponent value is ${num1 ** num2}`);
    } else {
        response.send(`no operation`);
    }
});


app.listen(process.env.PORT, ()=>{
    console.log(`listening to port ${process.env.PORT}`)
})