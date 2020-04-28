const express = require("express");
const router = express.Router();
const restaurantsCtrl = require("../../controllers/restaurants");

/*---------- Public Routes ----------*/
router.post("/add", restaurantsCtrl.add);

/*---------- Protected Routes ----------*/

module.exports = router;
