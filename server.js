const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//Imports routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());

//CORS Policy middleware
app.use(cors());

//route middleware
app.use(postRoutes);



const PORT = 8000;
const DB_URL = 'mongodb+srv://ishara:ishara1234@mernapp.tmrk2lr.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log('DB Connected ...');
}).catch((err)=>{
    console.log('DB connection error : ',err)
})


app.listen(PORT, ()=> {
    console.log(`App is running on ${PORT}`);
})