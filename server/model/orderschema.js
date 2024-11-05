const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    Image:String,
    ProductName:String,
    Price:String,
    Link:String
})

const order1Model = mongoose.model('order',OrderSchema)

module.exports=order1Model