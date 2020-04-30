const BASE_URL = "/api/geocode/";

export function getGeocode(query) {
  return fetch(BASE_URL + "get", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(query),
  }).then((res) => {
    console.log("this is res from geocodeService", res);
    if (res.ok) return res;
    throw new Error("get Geocode Failed! Check geocodeService.get path");
  });
}
