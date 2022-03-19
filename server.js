
require('dotenv').config()

const express = require('express');
const app = express();
app.listen(6000, () => console.log('Server Started'));

const mongoose=require('mongoose');
mongoose.connect(process.env.DataBase_URL);
const db=mongoose.connection;
db.on('err',(error)=>console.error(error));
db.once('open',()=>console.log('connected to database'));

app.use(express.json());
const routes=require('./routes/Question');
app.use('/questions',routes);
