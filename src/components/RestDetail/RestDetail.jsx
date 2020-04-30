import React from "react";
import {
  Form,
  Grid,
  Image,
  TextArea,
  Button,
  Icon,
  Comment,
  Card,
  Placeholder,
} from "semantic-ui-react";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import NavBar from "../NavBar/NavBar";
import "./RestDetail.css";
import { Feed } from "../../pages/RestaurantAccountPage/style";
import userService from "../../utils/userService";
import { withRouter, Link } from "react-router-dom";

class RestDetail extends React.Component {
  state = {
    // posts: [],
  };

  //   async componentDidMount() {
  //     if (!this.props.user.email) {
  //       return;
  //     }
  //     let user = await userService.getUserByEmail(this.props.user.email);
  //     // console.log(user);
  //     let allposts = user.posts.reverse();
  //     this.setState({ posts: allposts });
  //     console.log("state: ", this.state);
  //   }

  showAllPosts = () => {
    let posts = this.props.selectedRestaurantObj.posts.map((e) => {
      // console.log(e);
      return (
        <div className="post-container" key={e.timestamp}>
          <Comment.Group>
            <Comment>
              <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
              <Comment.Content>
                <Comment.Author>
                  {this.props.selectedRestaurantObj.businessName}
                </Comment.Author>
                <Comment.Metadata>
                  <div>{e.timestamp}</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>{e.content}</p>
                </Comment.Text>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </div>
      );
    });
    return posts;
  };

  render() {
    return (
      <div>
        <NavBar />
        <Grid className="borderless" celled>
          <Grid.Row>
            <Grid.Column width={4}>
              <Card className="placeholder">
                <Card.Content>
                  <Placeholder fluid>
                    <Placeholder.Image square />
                  </Placeholder>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column width={9}>
              <Image className="banner" src="https://i.imgur.com/KJw1OyF.jpg" />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <RestaurantInfo user={this.props.selectedRestaurantObj} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Feed>{this.showAllPosts()}</Feed>
            </Grid.Column>
            <Grid.Column width={3}>
              <Button>Order Now</Button>

              <Button onClick={this.props.clearState}>Go Back</Button>

              <Image src="/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(RestDetail);
