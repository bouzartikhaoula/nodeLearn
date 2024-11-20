const mongoose =require("mongoose")

const Schema=mongoose.Schema
const userSchema= new Schema({
   //define the schema

    firstName:String,
    LastName:String,
    Email:String,
    Telephone:String,
    age:Number,
    Country:String,
    Gender:String,
})
//creat a model

const User = mongoose.model("customer",userSchema)

module.exports=User