const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        
        ref:'Sell'
    },
    Price:{
        type:mongoose.Schema.Types.Number,
        default:100,
        ref:'Sell'
    }
})

module.exports = mongoose.model('CartItem',cartItemSchema)