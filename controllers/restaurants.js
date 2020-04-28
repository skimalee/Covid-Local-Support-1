const Restaurant = require("../models/restaurant");

module.exports = {
  add,
};

async function add(req, res) {
  const restaurant = new Restaurant(req.body);
  restaurant.save((err) => {
    if (err) {
      console.log("***");
      console.error(err);
      console.log("***");
      return res.status(500);
    }
    res.status(201).json(restaurant);
  });
}
