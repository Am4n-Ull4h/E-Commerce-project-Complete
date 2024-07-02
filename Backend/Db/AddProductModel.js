let mongoose = require('mongoose')

let Schema = mongoose.Schema({
    prImage:String,
    prName:String,
    prPrice:String,
    prQuantity:String,
    prDescription:String,
    prCompany:String,
},
{collection: 'Products'})

let prModel = mongoose.model('Products', Schema)

module.exports = prModel