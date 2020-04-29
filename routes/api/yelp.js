const express = require("express");
const router = express.Router();
const yelpCtrl = require("../../controllers/yelp");

/*---------- Public Routes ----------*/
router.post("/get", yelpCtrl.getYelp);
router.post("/getspecific", yelpCtrl.getYelpSpecific);

/*--------- Protected Routes ---------*/

module.exports = router;
