const mongoose = require('mongoose')
const { Schema } = mongoose;

const qaSchema = new Schema({
    Question : {
        type : String
    },
    Answer : {
        type : String
    },
    reaction : {
        type : Number
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('qa',qaSchema);