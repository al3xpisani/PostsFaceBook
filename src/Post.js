import React from 'react';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      avatarName={props.data.name}
      avatarPostTime={props.data.time}
    />
    <p>{props.data.body}</p>
  </div>
);

export default Post;
