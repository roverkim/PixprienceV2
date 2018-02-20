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
app.use(express.static("client/build")); // Serve Static React Pages
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
  console.log("Submit imagess Path hit");
  console.log("BODY", req.body);
  console.log(req.body.title);
  console.log(req.body.notes);
  console.log(req.body.userEmail);


  var testImage = {image: req.body.base64, title: req.body.title, notes: req.body.notes, userEmail: req.body.userEmail}
  console.log(testImage);
  db.Image.create({image: req.body.base64, title: req.body.title, notes: req.body.notes, userEmail: req.body.userEmail}).then(function(dbImage) {
    console.log(dbImage);
    console.log("image databse hit")
  }).catch(function(err) {
    console.log(err.message);
    console.log("there is an error");
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

app.get("/test/images", function(req, res) {
    console.log("images path hit.");
    console.log(req.query.email);
    console.log(req.params.email);
    db.Image.find({'email': req.params.email}).sort({"_id": -1}).then( function (err, found) {
        console.log(found)
        // console.log("images of user with "+ email +" found.")
        // Log any errors if the server encounters one
        if (err) {
            console.log(err);
        }
        // Otherwise, send the result of this query to the browser
        else {
            res.json(found);
        }
    });
});


// db.images.create({ title: 'test2000'})
// .then(function(dbimages){
//     console.log(dbimages);
// })
// .catch(function(err){
//     console.log(err.message);
// })


/////////////////////////////////////////////// /* Start Server */ ////////////////////////////////////////////////////////

app.listen(PORT, (error) => {
  if (!error) {
    console.log("listening on port", PORT);
  } else {
    console.error(error)
    throw error;
  }
});
