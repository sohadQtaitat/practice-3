'use strict';

require('dotenv').config();

const express = require ('express');
const cors = require('cors');
const PORT= process.env.PORT;
const app = express();

app.use(cors());

app.get('/',(request,response)=>{
    response.status(200).send('Home Page');
});

app.get('/data',(request,response)=>{
    let data = {};
    response.status(200).json('data');
});


app.get('*',(request,response)=>{
    response.status(404).send('Not Found!');
});

app.listen(PORT, () => console.log(`app listening on ${PORT}`)) 