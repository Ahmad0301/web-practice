mongoose = require('mongoose')
const{Schema}= require('mongoose')
 
studentschema= new Schema(

    {
        name:{type: String,required: true},
        rollno:{type:Number},
        age:{type:Number}

    }
)
const student = mongoose.model('student', studentschema  )
module.exports=student