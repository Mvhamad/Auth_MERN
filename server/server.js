//importations
const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const Routes = require('./routes/routes');

//config importations
require('dotenv').config({path:'./config/.env'});
require('./config/db');

//app
const app = express();

//middlewares
app.use(cors()); //allow cross origin requests from any domain to access the api
app.use(express.json()); //for parsing json data in request body
// app.use(bodyParser());

//routes
app.use('/api', Routes);

//Port
const Port = process.env.PORT || 5555

//listening
app.listen(Port, ()=>{
    console.log(`Server running on ${Port}`);
})