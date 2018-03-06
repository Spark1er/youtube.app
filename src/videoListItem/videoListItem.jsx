import React from "react";
import { Card, Media } from "reactstrap";
import "./videoListItem.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <Card
      className="card"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <Media>
        <Media>
          <Media>
            <img
              className="prev"
              alt="sideimg"
              src={video.snippet.thumbnails.medium.url}
            />
          </Media>
        </Media>
        <Media body>
          <Media className="title">
            <p> {video.snippet.title}</p>
          </Media>
          <Media className="description">
            <p> {video.snippet.channelTitle}</p>
          </Media>
        </Media>
      </Media>
    </Card>
  );
};

export default VideoListItem;
