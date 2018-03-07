import React, { Component } from "react";
import SearchBar from "./searchBar/searchBar";
import VideoList from "./videoList/videoList";
import _ from "lodash";
import YTSearch from "./YTsearch/ytsearch";
import "./App.css";
import VideoDetail from "./videoDetail/videoDetail";

const key = "AIzaSyAP6VCVEI4EN25K6qudC4YKnKceeUOm6fU";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  videoSearch(term) {
    YTSearch(
      {
        key: key,
        term: term,
        maxResults: 8
      },
      videos => {
        this.setState({ videos: videos });
      }
    );
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 200);
    return (
      <div>
        <SearchBar videoSearch={videoSearch} />
        <div className="container-fluid main">
          <div className="row">
            <div className="col-xl-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-xl-4">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={selectedVideo =>
                  this.setState({ selectedVideo })
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
