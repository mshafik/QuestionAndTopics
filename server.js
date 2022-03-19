
const express = require('express');
const app = express();
app.listen(process.env.PORT || 6000, () => console.log('Server Started'))
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://milad:Zwhe24ZOK4XD6JuB@cluster0.grdq6.mongodb.net/QuestionsAndTopicsDB');
const db=mongoose.connection;
db.on('err',(error)=>console.error(error));
db.once('open',()=>console.log('connected to database'));

app.use(express.json());
const routes=require('./routes/Question');
app.use('/questions',routes);
