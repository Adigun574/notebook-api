const Note = require('../models/note')

const d = new Date()
const day = d.getDate()
const month = d.getMonth() + 1
const year = d.getFullYear()
const date = `${day}/${month}/${year}`

getNotesByUserEmail = (req,res)=>{
    const email = req.params.email
    Note.find({email})
        .then(result=>{
            res.status(200).json({success:true,message:result})
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'failed'})
        })
}


saveNote = (req,res)=>{
    const {title,note,email} = req.body
    const newNote = {
        title,
        note,
        email,
        date
    }
    Note.create(newNote)
        .then(result=>{
            res.status(201).json({success:true,message:'note created',data:result})
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'note not created'})
        })
}

updateNote = (req,res)=>{
    const {title,note,email} = req.body
    const id = req.body._id
    const updatedNote = {
        title,
        note,
        email,
        date
    }
    Note.findOneAndUpdate({_id:id},updatedNote,{new:true,useFindAndModify:false})
        .then(result=>{
            res.status(201).json({success:true,message:'note updated'})
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'note not updated'})
        })
}

deleteSingleNote = (req,res)=>{
    const id = req.params.id
    Note.findByIdAndRemove({_id:id},{useFindAndModify:false})
        .then(result=>{
            res.status(200).json({success:true,message:'note deleted'})
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'note not deleted'})
        })
}

deleteAllNotes = (req,res)=>{
    const email = req.params.email
    Note.deleteMany({email:email})
        .then(result=>{
            res.status(200).json({success:true,message:'notes deleted'})
        })
        .catch(err=>{
            res.status(400).json({success:false,message:'notes not deleted'})
        })
}

const notesController = {
    getNotesByUserEmail, 
    saveNote, 
    updateNote, 
    deleteSingleNote, 
    deleteAllNotes
}


module.exports = notesController