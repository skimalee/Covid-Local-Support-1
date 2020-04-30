import React from "react";
import { Info, ResName } from "./style";

const RestaurantInfo = (props) => {
  return (
    <Info>
      <ResName>{props.user.businessName}</ResName>
      <button
        onClick={() => {
          console.log(props.user);
        }}
      >
        click me for user data
      </button>
    </Info>
  );
};

export default RestaurantInfo;
