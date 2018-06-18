/* jslint node: true */
/* jslint es6 */
"use strict";

import { Router } from "express";
import * as ImageController from "../controllers/imagecontroller";
const router = new Router();

// images Upload Route
// router.post("/test/upload", function(req, res) {
//
//   let testImage = {
//     image: req.body.base64,
//     title: req.body.title,
//     notes: req.body.notes,
//     userEmail: req.body.userEmail,
//     lat: req.body.lat,
//     lng: req.body.lng,
//     share: req.body.share,
//     timelineDate: req.body.timelineDate
//   }
//   console.log("Share is " + req.body.share)
//   db.Image.create(testImage).then(function(dbImage) {
//     res.send("Image Uploaded Sucessfully")
//   }).catch(function(err) {
//     // console.log(err.message);
//     // console.log("there is an error");
//   })
// });

router.post("/test/images", function(req, res) {
  console.log("images path hit.");
  db.Image.find({'userEmail': req.body.params.email}).sort({_id: -1}).then((found, err) => {
    err
      ? res.send("Images Not Found")
      : res.json(found);
  });
});

router.post('api/create/image', function(req, res) {
  // console.log('CHANGO')
  Image.insert({
    title: req.body.title,
    notes: req.body.notes,
    image: req.body.img
  }, function(err, response) {
    if (err) {
      res.send(err);
    } else {
      // console.log(response);
      console.log('image created!');
      // res.redirect('/profile');
    }
  });
});

export default router;
