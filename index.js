const express = require('express')
const dotenv = require('dotenv')
const users = require('./routes/users')
const notes = require('./routes/notes')
const dbConnection = require('./config/db')
const cors = require('cors')

dotenv.config({path:'./config/config.env'})

const app = express()

app.use(cors())

dbConnection()

app.use(express.json())


app.use('/api/v1/users',users)
app.use('/api/v1/notes',notes)


app.get('/',(req,res)=>{
    res.send("Hello from notebook")
})

PORT = process.env.PORT || 4000

app.listen(PORT,()=>console.log(`listening on port ${PORT}`))
