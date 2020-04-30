import React from "react";
import ResNavBar from "../../components/NavBar/ResNavBar";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import { Aside } from "./style";

const RestaurantAccountPage = (props) => {
  return (
    <div>
      <ResNavBar />
      <Aside>
        <RestaurantInfo />
      </Aside>
    </div>
  );
};

export default RestaurantAccountPage;
