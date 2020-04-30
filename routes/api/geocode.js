const express = require("express");
const router = express.Router();
const geocodeCtrl = require("../../controllers/geocode");

/*---------- Public Routes ----------*/
router.post("/get", geocodeCtrl.geocode);

/*---------- Protected Routes ----------*/

module.exports = router;
