/*jslint node: true */
/*jslint es6 */
"use strict";

import { Router } from "express";
import * as ImageController from "../controllers/imagecontroller";
const router = new Router();



router.post('api/create/image', function(req, res){
    // console.log('CHANGO')
    Image.insert(
        {
            title: req.body.title,
            notes: req.body.notes,
            image: req.body.img
        },
        function(err, response){
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
