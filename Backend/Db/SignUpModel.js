let mongoose = require('mongoose')

let Schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confirmPassword:String
},{
    collection:'users'
})


let Model = mongoose.model('signup',Schema)

module.exports = Model