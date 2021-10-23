const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const morgan = require("morgan");

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

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);

app.listen(port,()=>{
    console.log(`server started on ${port}`);
});