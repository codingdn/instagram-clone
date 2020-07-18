import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

export default function Post({ username, caption, imageURL }) {
  return (
    <div className="post">
      <div className="post__header">
        {/**header -> avater + username */}
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/image/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/**image */}
      <img className="post__image" src={imageURL} />

      {/**userane + caption */}
      <h4 className="post__text">
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
}
