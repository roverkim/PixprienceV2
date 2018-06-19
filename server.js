/* jslint node: true */
/* jslint es6 */
"use strict";
/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////

const express = require('express'); // Server
const bodyParser = require('body-parser'); // JSON Middleware
const passport = require('passport');
const cors = require("cors");
require('dotenv').config();
const config = require('./config');
const db = require("./models"); // Sequelize Models
require('./models').connect(config.dbUri); // connect to the database and load models
const authCheckMiddleware = require('./middleware/auth-check'); // Authentication Middleware
const admin = require('firebase-admin');
const serviceAccount = require('./pixprience-firebase-adminsdk-i21gg-95583c26c8.js');


/////////////////////////////////////////////// /* Initialize Express */ //////////////////////////////////////////////////////

const app = express();
const PORT = process.env.PORT || 8080;

/////////////////////////////////////////////// /* Express Middleware */ //////////////////////////////////////////////////////

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Allows For JSON Interactions Between Client & Server
app.use(express.static("./Pixperia/build")); // Serve Static React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

/////////////////////////////////////////////// /* Passport Authentication */ ////////////////////////////////////////////////////////

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

/////////////////////////////////////////////// /* Itinialize Firebase */ //////////////////////////////////////////////////////////

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const communityRoutes = require('./routes/community');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/community', communityRoutes);
app.use('/api', authCheckMiddleware);

/////////////////////////////////////////////// /* Cross Origin Settings */ //////////////////////////////////////////////////////

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());


/////////////////////////////////////////////// /* Routes */ //////////////////////////////////////////////////////////

// images Upload Route
app.post("/test/upload", function(req, res) {
  
  let prom = new Promise((resolve, reject) => {
    if (!req.body.base64) {
      reject('No Image File Uploaded');
    }
    // let newFileName = `${req.body.title}_${Date.now()}`;
    let fileUpload = bucket.file('images/'+req.body.title.replace(/\s/g, ""));
    
    fileUpload.save(new Buffer(req.body.base64.replace(/^data:image\/\w+;base64,/, ''), 'base64'), {
      metadata: {
        contentType: req.body.base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1]
      },
      public: true,
      validation: 'md5'
    },(error) => {
      if(error) throw 'err uploading';
      const url = `${process.env.IMAGELINK}${req.body.title.replace(/\s/g, "")}`;
      resolve(url);
    });
  });
  
  prom.then(url => {
    
    let image = {
      image: url,
      title: req.body.title,
      notes: req.body.notes,
      userEmail: req.body.userEmail,
      lat: req.body.lat,
      lng: req.body.lng,
      share: req.body.share,
      timelineDate: req.body.timelineDate
    };
    
    console.log("url is " + url);
    db.Image.create(image).then(function(dbImage) {
      res.send("Image Uploaded Sucessfully");
    }).catch(function(err) {
      res.send("Image Uploaded Unsucessfully");
    })
  });
});

app.post("/test/images", function(req, res) {
    db.Image.find({'userEmail' : req.body.params.email}).sort({_id: -1}).then((found, err) => {
      err ? res.send("Images Not Found") : res.json(found);
    });
});
/////////////////////////////////////////////// /* Start Server */ //////////////////////////////////////////////////////

app.listen(PORT, (error) => {
  if (!error) {
    console.log("listening on port", PORT);
  } else {
    console.error(error)
    throw error;
  }
});
