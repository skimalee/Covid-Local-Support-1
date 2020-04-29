const BASE_URL = "/api/restaurant";

export function addRestaurant(query) {
  // console.log("hitting add location");
  return fetch(BASE_URL + "add", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(query),
  }).then((res) => {
    // console.log("this is res from locationService", res);
    if (res.ok) return res.json();
    throw new Error("Add Restaurant Failed! Check restaurantService.add path");
  });
}

export function addRestaurantPost(query) {
  // console.log("hitting add location");
  return fetch(BASE_URL + "addpost", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(query),
  }).then((res) => {
    // console.log("this is res from locationService", res);
    if (res.ok) return res.json();
    throw new Error("Add Restaurant Failed! Check restaurantService.add path");
  });
}
