const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema({
    ProductName: String,
    AuthorName: String,
    Price: Number,
    Image: String,
    Tag: String,
    Link: String    
});

const Sell = mongoose.model('Sell', sellSchema);
module.exports = Sell;
