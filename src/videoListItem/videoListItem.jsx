import React from "react";
import "./videoListItem.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="card"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className="media">
        <div className="media">
          <div className="media">
            <img
              className="prev"
              alt="sideimg"
              src={video.snippet.thumbnails.medium.url}
            />
          </div>
        </div>
        <div className="media-body">
          <div className="media title">
            <p> {video.snippet.title}</p>
          </div>
          <div className="media description">
            <p> {video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListItem;
