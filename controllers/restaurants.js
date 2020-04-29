const Restaurant = require("../models/restaurant");

module.exports = {
  add,
  addPost,
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

async function addPost(req, res) {
  await Restaurant.findOne({ name: req.body.name }).exec((err, restaurant) => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = `${date} --- ${time}`;

    let post = {
      content: req.body.content,
      timestamp: dateTime,
    };
    restaurant.posts.push(post);

    restaurant.save((err) => {
      if (err) {
        console.log("***");
        console.error(err);
        console.log("***");
        return res.status(500);
      }
      res.status(201).json(restaurant);
    });
  });
}

async function deletePost(req, res) {
  await Restaurant.findOne({ name: req.body.name }).exec((err, restaurant) => {
    restaurant.save((err) => {
      if (err) {
        console.log("***");
        console.error(err);
        console.log("***");
        return res.status(500);
      }
      res.status(201).json(restaurant);
    });
  });
}
