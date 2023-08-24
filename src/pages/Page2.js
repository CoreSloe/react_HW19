import React from "react";
import Photo from "./Photo";
import "./Page2.css"; // Імпортуйте стилі

const photos = [
  {
    imageUrl:
      "https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Beautiful sunset",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Exploring the mountains",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Ocean",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/418831/pexels-photo-418831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Forest",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/17821539/pexels-photo-17821539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Metropolis",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/219972/pexels-photo-219972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "River",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3087666/pexels-photo-3087666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Waterfall",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Desert",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Field",
  },
];

function Page2() {
  return (
    <div className="page2-container">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <Photo
            key={index}
            imageUrl={photo.imageUrl}
            caption={photo.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Page2;
