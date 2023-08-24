import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="background-image">
        <img
          src="https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Sample"
          className="home-image"
        />
      </div>
      <div className="text-container">
        <p className="home-text">Ласкаво просимо на головну сторінку!</p>
      </div>
    </div>
  );
}

export default Home;
