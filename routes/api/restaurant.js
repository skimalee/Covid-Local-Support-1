const express = require("express");
const router = express.Router();
const restaurantsCtrl = require("../../controllers/restaurants");

/*---------- Public Routes ----------*/
router.post("/add", restaurantsCtrl.add);
router.post("/addpost", restaurantsCtrl.addPost);

/*---------- Protected Routes ----------*/

module.exports = router;
