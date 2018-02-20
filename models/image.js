/*jslint node: true */
/*jslint es6 */
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    },
    location: {
        type: String,
        trim: true
    },
    rating: {
        type: Number
    },
    share: {
        type: Boolean,
        default: true
    }
});

let Image = mongoose.model("Image", imageSchema);

module.exports = Image;
