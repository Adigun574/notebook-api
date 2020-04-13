const express = require('express')
const NotesController = require('../controllers/notes')

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Hello from notes')
})

//GET ALL NOTES BY USER'S EMAIL
router.get('/getnotesbyuseremail/:email',(req,res)=>{
    NotesController.getNotesByUserEmail(req,res)
})

//SAVE A NOTE
router.post('/savenote',(req,res)=>{
    NotesController.saveNote(req,res)
})

//UPDATE A NOTE
router.put('/updatenote',(req,res)=>{
    NotesController.updateNote(req,res)
})

//DELETE A SINGLE NOTE
router.delete('/deletesinglenote/:id',(req,res)=>{
    NotesController.deleteSingleNote(req,res)
})

//DELETE NOTES BY USER'S EMAIL
router.delete('/deleteallnotes/:email',(req,res)=>{
    NotesController.deleteAllNotes(req,res)
})

module.exports = router