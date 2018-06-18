const router = require("express").Router();
const communityController = require("../controllers/communityController");

router.route("/images")
  .get(communityController.findAll);
  
module.exports = router;
