const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    username:{
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},
{Timestamps:true}
)

module.exports = mongoose.model("users", userModel)