require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

/****************************************************** 
 * API Content
 * Put server express routes at the beginning 
 * ****************************************************/ 

const apiVersion = '/api/v' + process.env.API_VERSION

const router = require('./routes/route'); 
app.use(apiVersion, router);


/****************************************************** 
 * Static Content
 * ****************************************************/ 

app.use(express.static(path.join(__dirname, '/public')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    console.log(res);
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

/*
    body-parser: This middleware is used to parse the incoming  
    request bodies in a middleware before your handlers. 

    It makes the data available under req.body.
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 9999

app.listen(port, () => {
    console.log(`Server is live and running on ${port}.`);
});