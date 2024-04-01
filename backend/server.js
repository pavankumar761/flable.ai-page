const express = require('express')

const mongoDB = require('./db')

const app=express();
const PORT = 4000;

mongoDB();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log('app is listening amma');
})