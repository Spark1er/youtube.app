import React from "react";
import VideoListItem from "../videoListItem/videoListItem";
import { Link } from "react-router-dom";

const VideoList = props => {
  const videosItems = props.videos.map((video, i) => {
    const id = video.id.videoId;
    return (
      <div key={i}>
        <Link
          style={{ textDecoration: "none", color: "rgb(59, 59, 59)" }}
          to={`/watch/${id}`}
        >
          <VideoListItem
            className="item"
            video={video}
            onVideoSelect={props.onVideoSelect}
          />
        </Link>
      </div>
    );
  });
  return <ul>{videosItems}</ul>;
};
export default VideoList;
