const mongoose = require('mongoose')
const { Schema } = mongoose;

const qaSchema = new Schema({
    _id:{
        type: String
    },
    question : {
        type : String
    },
    answer : {
        type : String
    },
    like : {
        type : Number
    },
    dislike: {
        type: Number
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('qaM',qaSchema);