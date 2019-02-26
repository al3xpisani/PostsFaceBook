import React from 'react';

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <div className="data-container">
      <strong>{props.avatarName}</strong>
      <span>{props.avatarPostTime}</span>
    </div>
  </div>
);

export default PostHeader;
