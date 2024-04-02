const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://itsmedontuno123:Pavan%40761@cluster0.cupuyoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async ()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log('database sucessfully connected')
    } catch (error) {
        console.log('there is a problem in connecting database')
    }
}

module.exports = mongoDB;