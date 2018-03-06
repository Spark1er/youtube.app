import React, { Component } from "react";
import SearchBar from "./searchBar/searchBar";
import VideoList from "./videoList/videoList";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import "./App.css";
import VideoDetail from "./videoDetail/videoDetail";
import { Col, Row } from "reactstrap";

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
          <Row>
            <Col xs="8">
              <VideoDetail video={this.state.selectedVideo} />
            </Col>
            <Col xs="4">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={selectedVideo =>
                  this.setState({ selectedVideo })
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
