const mongoose=require('mongoose')
const attendenceSchema=new mongoose.Schema({
    employeeId:{
        type:String,
        required:true
    },
    employeeName:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})
const Attendence=mongoose.model('Attendence',attendenceSchema)
module.exports=Attendence