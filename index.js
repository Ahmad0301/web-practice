const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const db= require('./connection')
const student = require('./schema')

app.post('/student',async (req,resp)=>{
    try{

        const data = req.body
        const object = await student.create(data)
        resp.json(object)
    }
    catch(err)
    {
        console.log('error ')
        resp.status(500).json(err)
    }
    
})

const port = 3000
app.listen(port,()=>{
    console.log('listining on 3000 port')
})

