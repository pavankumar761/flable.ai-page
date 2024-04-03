const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const qaM = require('./Schema/qa')

const mongoDB = require('./db')

const app=express();
const PORT = 4000;

mongoDB();

app.use(cors());

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

app.post('/api/marco/like', async (req,res)=>{
    const ans = req.body.answer;
    const { value } = req.body;
    if(ans){
        await qaM.updateOne({ answer: ans }, { $inc: { like: value } })
        res.send('sucessfully updated')
    }else{
        res.send('updating went unsucessful')
    }
})

app.post('/api/marco/dislike',async (req, res) => { 
    const ans = req.body.answer;
    const { value } = req.body;
    if (ans) {
        await qaM.updateOne({ answer: ans }, { $inc: { dislike: value } })
        res.send('sucessfully updated')
    } else {
        res.send('updating went unsucessful')
    }
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT,()=>{
    console.log('app is listening amma');
})