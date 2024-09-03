const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://pranavsCloudDb:tYkyOMTrCeK2UK82@pranavpatil.ueodj.mongodb.net/miniProject01")
.then(function(){
    console.log("connect");
})
.catch(function(err){
    console.error(err);
});


const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    profilepic:{
        type: String,
        default: "default.jpg"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});

module.exports = mongoose.model('user', userSchema);
