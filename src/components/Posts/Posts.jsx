import React from "react";
import { Button, Comment, Form } from "semantic-ui-react";
import "./Posts.css";

const Posts = (props) => {
  return (
    <div className="post-container">
      <Comment.Group>
        <Comment>
          <Comment.Avatar as="a" src="/images/avatar/small/joe.jpg" />
          <Comment.Content>
            <Comment.Author>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>1 day ago</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>
                The hours, minutes and seconds stand as visible reminders that
                your effort put them all there.
              </p>
              <p>
                Preserve until your next run, when the watch lets you see how
                Impermanent your efforts are.
              </p>
            </Comment.Text>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
};

export default Posts;
