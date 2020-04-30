import React from "react";
import { Info, ResName } from "./style";
import { Icon } from "semantic-ui-react";
import { SocialMediaLinks } from "./style";

const RestaurantInfo = (props) => {
  let services = [];
  props.user.services.forEach((service) => services.push(service.label));
  let categories = [];
  props.user.categories.forEach((item) => categories.push(item.label));

  return (
    <Info>
      <ResName>{props.user.businessName}</ResName>
      <p>{props.user.businessWebsite}</p>
      <p>{props.user.businessPhone}</p>
      <SocialMediaLinks>
        <Icon name="facebook official" size="big" />
        <Icon name="twitter square" size="big" />
        <Icon name="instagram" size="big" />
      </SocialMediaLinks>
      <br />
      <button>Menu</button>
      <br />
      <br />
      <label>Hours: </label>
      <p>M: Closed</p>
      <p>T: 11a-7p</p>
      <p>W: 11a-7p</p>
      <p>T: 11a-7p</p>
      <p>F: 11a-7p</p>
      <p>S: 11a-7p</p>
      <p>S: Closed</p>
      <br />
      <label>Services: </label>
      <p>{services.join(", ")}</p>
      <label>Categories: </label>
      <p>{categories.join(", ")}</p>
    </Info>
  );
};

export default RestaurantInfo;
