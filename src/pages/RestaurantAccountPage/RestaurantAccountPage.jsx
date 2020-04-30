import React from "react";
import { Form, Grid, Image, TextArea } from "semantic-ui-react";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import ResNavBar from "../../components/NavBar/ResNavBar";
import "./RestaurantAccountPage.css";
import Posts from "../../components/Posts/Posts";
const RestaurantAccountPage = (props) => (
  <>
    <ResNavBar />
    <Grid className="borderless" celled>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://i.imgur.com/jpvc6Ee.png" />
        </Grid.Column>
        <Grid.Column width={13}>
          <Image className="banner" src="https://i.imgur.com/KJw1OyF.jpg" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <RestaurantInfo />
        </Grid.Column>
        <Grid.Column width={9}>
          <Form>
            <TextArea placeholder="Tell us more" />
          </Form>
          <Posts />
        </Grid.Column>
        <Grid.Column width={4}>
          <Image src="/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default RestaurantAccountPage;
