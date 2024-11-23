const express = require('express')
const mongoose =require('mongoose');  
const cookieParser =require('cookie-parser');
const cors =require('cors');

mongoose.connect('mongodb+srv://khuranaraghav388:raghavkhurana2024@cluster0.6d0xe.mongodb.net/'
)
.then(()=>console.log('Mongo DB CONNECTED'))
.catch((error)=>console.log(error));

const app =express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express());

app.listen(PORT,()=>console.log('Server is now runnig on port ${PORT}'))