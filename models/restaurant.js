const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema(
//   {
//     content: [String],
//     restaurantId: {
//       type: Schema.Types.ObjectId,
//       ref: "Restaurant",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const restaurantSchema = new mongoose.Schema(
  {
    owner: String,
    name: String,
    address: String,
    hours: String,
    phone: String,
    restaurantWebsite: String,
    deliveryWebsite: String,
    posts: [Object],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
