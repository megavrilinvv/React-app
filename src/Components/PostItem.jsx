import React from "react";
import MyButton from "./button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.title}</strong>
        <div>
          {props.post.id}. {props.post.body}
        </div>
      </div>
      <div className="post__button">
        <MyButton>DELETE/</MyButton>
        <MyButton>ADD</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
