require("dotenv").config();
const fetch = require("node-fetch");

const geocode = async (req, res) => {
  console.log(req.body);
  const encodedAddress = encodeURI(req.body.address);

  // fetches data from our api
  const apiResponse = await fetch(
    `https://google-maps-geocoding.p.rapidapi.com/geocode/json?language=en&address=${encodedAddress}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      },
    }
  )
    .catch((err) => {
      console.log(err);
    })
    .then((res) => res.json());

  return res.json(apiResponse);
};

module.exports = {
  geocode,
};
