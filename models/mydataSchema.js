const mongoose =require("mongoose")

const Schema=mongoose.Schema
//define the schema
const articleSchema= new Schema({
    userNameee:String,
    age:Number
})

//creat a model
const Mydata = mongoose.model("Mydataaa",articleSchema)

module.exports=Mydata