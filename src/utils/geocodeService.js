import axios from "axios";

const BASE_URL = "/api/geocode/";

export async function getGeocode(query) {
  try {
    const res = await axios.post(`${BASE_URL}get`, query);
    return res.data;
  } catch (err) {
    console.error(err);
  }
}
