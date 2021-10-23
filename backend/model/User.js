const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
});

const Users = mongoose.model('person',userSchema);

module.exports = Users;