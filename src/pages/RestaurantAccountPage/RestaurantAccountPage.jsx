import React from "react";
import {
  Form,
  Grid,
  Image,
  TextArea,
  Button,
  Icon,
  Comment,
} from "semantic-ui-react";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import ResNavBar from "../../components/NavBar/ResNavBar";
import "./RestaurantAccountPage.css";
import Posts from "../../components/Posts/Posts";
import { Feed } from "./style";
import userService from "../../utils/userService";

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
  };

  async componentDidMount() {
    console.log(this.state.posts);
    if (!this.props.user.email || this.state.posts.length > 0) {
      return;
    }
    let user = await userService.getUserByEmail(this.props.user.email);
    // console.log(user);
    let allposts = user.posts;
    this.setState({ posts: allposts });
    console.log("state: ", this.state);
  }

  showAllPosts = () => {
    let originalPosts = this.state.posts;
    let reversedPosts = originalPosts.reverse();

    let posts = reversedPosts.map((e) => {
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
              <Image className="resImg" src="https://i.imgur.com/jpvc6Ee.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image className="banner" src="https://i.imgur.com/KJw1OyF.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <RestaurantInfo user={this.props.user} />
            </Grid.Column>
            <Grid.Column width={7}>
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
              <Image src="/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default RestaurantAccountPage;
