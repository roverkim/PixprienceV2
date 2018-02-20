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
        default: Date.now
    },
    latitude: {
        type: String,
        trim: true
    },
    longitude: {
        type: String,
        trim: true
    },
    share: {
        type: Boolean,
        default: true
    },
    userEmail: {
        type: String,
        trim: true
    }
});

let Image = mongoose.model("Image", imageSchema);

module.exports = Image;