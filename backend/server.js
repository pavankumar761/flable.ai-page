const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const qaM = require('./Schema/qa')

const mongoDB = require('./db')

const app=express();
const PORT = 4000;

mongoDB();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(bodyParser.json());

app.post(`/api/marco/ask`,async (req,res)=>{
    const {question} = req.body;
    let data=null;
    data=await qaM.findOne({question})
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({ error: 'Answer not found for the question' });
    }
}) 

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log('app is listening amma');
})