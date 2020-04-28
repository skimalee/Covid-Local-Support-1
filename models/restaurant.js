const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    hours: String,
    phone: String,
    restaurantWebsite: String,
    deliveryWebsite: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
