/**
 * Created by suzanne on 10/18/16.
 */

//  to use this template you must set up your ENV variables
//  .env file must contain values for
//  MONGOLAB_URI (for mLab projects);
// user & pass for mLab set in .env file (uses dotenv)
//  API_KEY (for google api projects)


var express = require('express');
var mongodb = require('mongodb');
var dotenv = require('dotenv');
var multer  = require('multer');
var upload = multer();


var app = express();
app.use(express.static('.'));
app.set('port', (process.env.PORT || 5000));
dotenv.config();

var MongoClient = mongodb.MongoClient;


// Connection URL. This is where your mongodb server is running.
// For locally running connection
//var url = 'mongodb://localhost:27017/urlshortener';
var url = process.env.MONGOLAB_URI;

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to database');


    // do some work here with the database.
    app.get('/', function (req, res) {
      res.send(index.html);
    });


    app.post('/', upload.single('fileupload'), function (req, res) {
        var size = req.file.size;
        console.log(size);
        //res.sendStatus(size);
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
      output = {size: size};
      res.send(output);
      //res.end();
    })

    //Create the server connection
    app.listen(app.get('port'), function () {
      console.log('Node app is running on port', app.get('port'));
    });


    //Close connection
    db.close;
  }

});