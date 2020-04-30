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
import ResNavBar from "../../components/NavBar/ResNavBar";
import "./RestaurantAccountPage.css";
import Posts from "../../components/Posts/Posts";
import { Feed, ImageContainer } from "./style";
import userService from "../../utils/userService";
import { withRouter } from "react-router-dom";

class RestaurantAccountPage extends React.Component {
  state = {
    postInput: "",
    posts: [],
  };

  handleChange = (event) => {
    // console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    if (!this.state.postInput) {
      return;
    }
    event.preventDefault();
    let query = {
      newPost: this.state.postInput,
      email: this.props.user.email,
    };
    console.log(query);
    try {
      await userService.addPost(query);
    } catch (err) {
      console.log(err);
    }
    this.componentDidMount();
  };

  async componentDidMount() {
    if (!this.props.user.email) {
      return;
    }
    let user = await userService.getUserByEmail(this.props.user.email);
    // console.log(user);
    let allposts = user.posts.reverse();
    this.setState({ posts: allposts });
    console.log("state: ", this.state);
  }

  showAllPosts = () => {
    let posts = this.state.posts.map((e) => {
      // console.log(e);
      return (
        <div className="post-container" key={e.timestamp}>
          <Comment.Group>
            <Comment>
              <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
              <Comment.Content>
                <Comment.Author>{this.props.user.businessName}</Comment.Author>
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
        <ResNavBar />
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
              <RestaurantInfo user={this.props.user} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Form onSubmit={this.handleSubmit}>
                <TextArea
                  className="post-form"
                  placeholder="Tell us more"
                  name="postInput"
                  value={this.state.postInput}
                  onChange={this.handleChange}
                />
                <Button icon>
                  <Icon name="paper plane" />
                </Button>
              </Form>
              <br />
              <Feed>
                {/* <Posts userByEmail={this.userByEmail} /> */}
                {this.showAllPosts()}
              </Feed>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button className="orderbtn">Order Now</Button>
              <br />
              <br />
              <ImageContainer>
                <Image.Group size="tiny">
                  <Image src="https://i.imgur.com/4y7tKss.jpg" />
                  <Image src="https://i.imgur.com/MVKpIt2.jpg" />
                  <Image src="https://i.imgur.com/E8HNxLT.jpg" />
                  <Image src="https://i.imgur.com/jRtC94k.jpg" />
                  <Image src="https://i.imgur.com/sDjZdos.jpg" />
                  <Image src="https://i.imgur.com/ZOG0iAU.jpg" />
                </Image.Group>
              </ImageContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(RestaurantAccountPage);
