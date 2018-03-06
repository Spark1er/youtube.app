import React from "react";
import "./videoDetail.css";
import errImg from "../assets/err.png";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="message">
        <img src={errImg} alt="" />
        <h1>Please find and choose your video :3</h1>
        
      </div>
    );
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?v=2&alt=json`;

  return (
    <div className="video">
      <div>
        <iframe title="rng" src={url} />
      </div>
      <div>
        <div className="title">
          <h1>{video.snippet.title}</h1>
        </div>
        <div className="channel">
          <p> {video.snippet.channelTitle}</p>
        </div>
        <div className="info">
          <p> {video.snippet.description}</p>
        </div>
       
      </div>
    </div>
  );
};

export default VideoDetail;
