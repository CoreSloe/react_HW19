import React from "react";
import "./Photo.css";

const Photo = ({ imageUrl, caption }) => {
  return (
    <div className="photo">
      <img src={imageUrl} alt={caption} />
      <p className="caption">{caption}</p>
    </div>
  );
};

export default Photo;
