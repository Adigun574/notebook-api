const mongoose = require('mongoose')

const mongo = ()=>{ mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res=>console.log('connected to db '))
    .catch(err=>console.log('connection to db failed'))
}

module.exports = mongo