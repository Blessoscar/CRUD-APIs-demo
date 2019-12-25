
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require products routes
const product = require('./routes/routes'); 

// create express app
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);



// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(db , { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "An app demonstrating simple API implementation with NodeJs, Express and MongoDb."});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});



