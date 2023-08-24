import React from "react";
import { FaThumbsUp, FaRetweet, FaComment, FaDownload } from "react-icons/fa";
import "./Post.css";

const Post = ({ author, content, image, date }) => {
  return (
    <div className="post">
      <div className="post-author">
        <img src={author.photo} alt={author.name} />
        <div className="author-info">
          <p className="author-name">{author.name}</p>
          <p className="author-nickname">{author.nickname}</p>
        </div>
      </div>
      <p className="post-content">{content}</p>
      {image && (
        <div className="post-image-container">
          <img className="post-image" src={image} alt="Post" />
          <div className="social-icons">
            <FaThumbsUp className="social-icon" />
            <FaRetweet className="social-icon" />
            <FaComment className="social-icon" />
            <FaDownload className="social-icon" />
          </div>
        </div>
      )}
      <p className="post-date">{date}</p>
    </div>
  );
};

export default Post;
