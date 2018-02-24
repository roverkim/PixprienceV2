/* jslint node: true */
/* jslint es6 */
"use strict";

/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////

const express = require('express'); // Server
const bodyParser = require('body-parser'); // JSON Middleware
const passport = require('passport');
const config = require('./config');

/////////////////////////////////////////////// /* Initialize Express */ ////////////////////////////////////////////////////////

let app = express();
let PORT = process.env.PORT || 8080;

/////////////////////////////////////////////// /* Express Middleware */ ////////////////////////////////////////////////////////

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); // Allows For JSON Interactions Between Client & Server
app.use(express.static("./client/build")); // Serve Static React Pages
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
require('./models').connect(config.dbUri); // connect to the database and load models

/////////////////////////////////////////////// /* Passport Authentication */ //////////////////////////////////////////////////////////

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware //
const authCheckMiddleware = require('./middleware/auth-check');

/////////////////////////////////////////////// /* Routes */ ////////////////////////////////////////////////////////

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const communityRoutes = require('./routes/community');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/community', communityRoutes);
app.use('/api', authCheckMiddleware);

/////////////////////////////////////////////// /* Cross Origin Settings */ ////////////////////////////////////////////////////////

var cors = require("cors");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());

/////////////////////////////////////////////// /* Hard Coded Routes */ //////////////////////////////////////////////////////////

const db = require("./models"); // Sequelize Models
// images Upload Route
app.post("/test/upload", function(req, res) {

  let testImage = {image: req.body.base64, title: req.body.title, notes: req.body.notes, userEmail: req.body.userEmail, lat: req.body.lat, lng: req.body.lng, share: req.body.share, timelineDate: req.body.timelineDate}
  console.log("Share is " + req.body.share)
  db.Image.create(testImage).then(function(dbImage) {
    res.send("Image Uploaded Sucessfully")
  }).catch(function(err) {
    // console.log(err.message);
    // console.log("there is an error");
  })
});

// // Delete After Paige Adds Email To IMage Field
// app.get("/test/images", function(req, res) {
//   console.log("images path hit.")
//   console.log(req.query.email);
//   db.Image.find({}, function(err, found) {
//     console.log(found)
//     // console.log("images of user with "+ email +" found.")
//     // Log any errors if the server encounters one
//     if (err) {
//       console.log(err);
//     }
//     // Otherwise, send the result of this query to the browser
//     else {
//       res.json(found);
//     }
//   });
// });

app.post("/test/images", function(req, res) {
    console.log("images path hit.");
    // console.log(req.body);
    db.Image.find({'userEmail' : req.body.params.email}).sort({_id: -1}).then((found, err) => {
      err ? res.send("Images Not Found") : res.json(found);
    });
});




/////////////////////////////////////////////// /* Start Server */ ////////////////////////////////////////////////////////

app.listen(PORT, (error) => {
  if (!error) {
    console.log("listening on port", PORT);
  } else {
    console.error(error)
    throw error;
  }
});
