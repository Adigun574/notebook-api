const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    note:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    date:{
        type:String,
        trim:true,
        required:true
    }
})


module.exports = mongoose.model('Note', NoteSchema)