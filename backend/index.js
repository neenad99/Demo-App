const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require("morgan");
const path = require('path');

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');

const mongooseConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
  
mongoose.connect(process.env.MONGO_URL, mongooseConnectOptions)
.then(()=>{
    console.log("db connected");
})
  

app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../frontend");

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.sendFile(path.join(static_path,'person.html'));
});

app.listen(port,()=>{
    console.log(`server started on ${port}`);
});