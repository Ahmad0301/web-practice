const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/')
const db = mongoose.connection
db.on('connected',()=>{console.log('database is connected')})
db.on ('error',()=>{console.log('error in connection')})
db.on('disconnected',()=>{console.log('connection disconnected')})

module.exports = db
