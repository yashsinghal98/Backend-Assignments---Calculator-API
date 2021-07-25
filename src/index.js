const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!")
});

app.post('/add',(req,res)=>{
    let a=req.body.num1;
    let b=req.body.num2;
     if(a===undefined||b===undefined){
        res.status(404).send({
            status:"failure"
        });
        return;
    }
    if(!isNaN(a)&&!isNaN(b)){
        let c=parseFloat(a)+parseFloat(b);
        if(c<-1000000||a<-10000000||a<-10000000){
            res.send({
                status:"error",
                message:"Underflow"
            });
            return;
        }
        if(a>10000000||b>10000000||c>10000000){
            res.send({
                status:"error",
                message:"Overflow"
            });
            return;
        }
        res.send({
            status:"success",
            message:"the sum of given two numbers",
            sum:c
        });
        return;
    }
    else {
        res.send({
            status:"error",
            message:"Invalid data types"
        });
        return;
    };
})

app.post('/sub',(req,res)=>{
    let a=req.body.num1;
    let b=req.body.num2;
     if(a===undefined||b===undefined){
        res.status(404).send({
            status:"failure"
        });
        return;
    }
    if(!isNaN(a)&&!isNaN(b)){
        let c=parseFloat(a)-parseFloat(b);
        if(c<-1000000||a<-10000000||a<-10000000){
            res.send({
                status:"error",
                message:"Underflow"
            });
            return;
        }
        if(a>10000000||b>10000000||c>10000000){
            res.send({
                status:"error",
                message:"Overflow"
            });
            return;
        }
        res.send({
            status:"success",
            message:"the difference of given two numbers",
            difference:c
        });
        return;
    }
    else {
        res.send({
            status:"error",
            message:"Invalid data types"
        });
        return;
    };
})

app.post('/multiply',(req,res)=>{
    let a=req.body.num1;
    let b=req.body.num2;
     if(a===undefined||b===undefined){
        res.status(404).send({
            status:"failure"
        });
        return;
    }
    if(!isNaN(a)&&!isNaN(b)){
        let c=parseFloat(a)*parseFloat(b);
        if(c<-1000000||a<-10000000||a<-10000000){
            res.send({
                status:"error",
                message:"Underflow"
            });
            return;
        }
        if(c>10000000||a>10000000||b>10000000){
            res.send({
                status:"error",
                message:"Overflow"
            });
            return;
        }
        res.send({
            status:"success",
            message:"The product of given numbers",
            result:c
        });
        return;
    }
    else {
        res.send({
            status:"error",
            message:"Invalid data types"
        });
        return;
    };
})

app.post('/divide',(req,res)=>{
    let a=parseFloat( req.body.num1);
    let b=parseFloat(req.body.num2);
    if(a===undefined||b===undefined){
        res.status(404).send({
            status:"failure"
        });
        return;
    }
    if(!isNaN(a)&&!isNaN(b)){
        if(b===0){
            res.send({
                status:"error",
                message:"Cannot divide by zero"
            });
            return;
        }
        let c=parseFloat(a)/parseFloat(b);
        if(c<-1000000||a<-10000000||a<-10000000){
            res.send({
                status:"error",
                message:"Underflow"
            });
            return;
        }
        if(c>10000000||a>10000000||b>10000000){
            res.send({
                status:"error",
                message:"Overflow"
            });
            return;
        }
        res.send({
            status:"success",
            message:"The division of given numbers",
            result:c
        });
        return;
    }
    else {
        res.send({
            status:"error",
            message:"Invalid data types"
        });
        return;
    };
})



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
