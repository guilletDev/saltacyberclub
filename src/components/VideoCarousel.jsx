import React from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import { vid1,vid2,vid3 } from "../assets/images";

const videos = [
  {
    url: {vid1},
    title: "Video 1",
  },
  {
    url: {vid2},
    title: "Video 2",
  },
  {
    url: {vid3},
    title: "Video 3",
  },
];

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {videos.map((video) => (
        <div key={video.url}>
          <h2>{video.title}</h2>
          <ReactPlayer url={video.url} controls />
        </div>
      ))}
    </Slider>
  );
};

export default VideoCarousel;
