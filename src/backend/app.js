const express = require('express');
const fs = require('fs');
const cors = require('cors');
const userModel = require('./models');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get('/posts', cors(), (req, res) => {
    async function fetchPosts() {
        let postList = await userModel.find();
        res.end(JSON.stringify(postList));
    }

    fetchPosts()
})

app.post('/upload', (req, res) => {
    let postInfo = req.body

    async function upload() {
        let newPost = new userModel(postInfo);
        await newPost.save();
        res.end();
    }
    upload()
})

app.listen(PORT, () => {
    console.log(`Server ACTIVE on PORT: ${PORT}`);
})

module.exports = app