import React from "react";
import Post from "./Post";
import "./Page1.css";

function Page1() {
  const sampleAuthor = {
    name: "Anakin Skywalker",
    nickname: "@dart_vader",
    photo:
      "https://ssb.wiki.gallery/images/thumb/9/99/Anakin_SSBU.png/200px-Anakin_SSBU.png",
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="wrapper">
          <h1>Publications</h1>
          <Post
            author={sampleAuthor}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
            date="2023-02-26"
          />
          <Post
            author={sampleAuthor}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
            date="2023-02-27"
          />
          <Post
            author={sampleAuthor}
            content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
            image="https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
            date="2023-02-28"
          />
        </div>
      </div>
    </div>
  );
}

export default Page1;
