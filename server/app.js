'use strict';

const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer( {dest: './uploads/' });

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

app.post('/upload', upload.single('file'), (req, res) => {
    if(req.file) {
        res.json({
            originalname: req.file.originalname,
            newname: req.file.name,
            filesize: `${req.file.size} bytes`
        });
    }
    else {
        console.log('No file has been uploaded');
    }
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
