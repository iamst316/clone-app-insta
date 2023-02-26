const mongoose = require('mongoose');
const url = "mongodb+srv://iamst316:10xacademy@cluster1.lr7vftm.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);
const users = mongoose.Schema({
    username: String,
    location: String,
    date: String,
    data: String,
    desc: String,
    likes: Number
})

const userModel = mongoose.model('instaclone', users);

mongoose.connect(url,{
    useNewUrl:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Connected to mongoDB");
});



module.exports = userModel;