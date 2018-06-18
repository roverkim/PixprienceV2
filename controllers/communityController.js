/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const db = require("../models"); // Models

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Image
      .find({share:true})
      .sort({ _id: -1 })
      .then(communityImages => res.json(communityImages))
      .catch(err => res.status(422).json(err));
  }
};
