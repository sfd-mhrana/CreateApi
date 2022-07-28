const mongoose=require('mongoose')

const subscriberSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Rool_NO:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Student',subscriberSchema)