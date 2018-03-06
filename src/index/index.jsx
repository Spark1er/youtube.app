import React, { Component } from "react";
import "./index.css";
// import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.videoSearch(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="mainpg">
        {/* <Link to="/list">
          <SearchBar videoSearch={this.props.videoSearch} />
        </Link> */}
        {/* <InputGroup>
          <InputGroupAddon addonType="prepend" />
          <form className="inpu" onSubmit={this.handleSubmit}>
            <label>
              <Input
                autoFocus
                type="text"
                size="60"
                placeholder="Enter the query"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label> */}
        <h1>YouTube.APP</h1>

        <Link style={{ textDecoration: "none", color: "#fff" }} to="/list">
          <Button
            variant="raised"
            color="secondary"
            className="subut"
            type="submit"
          >
            Get started
          </Button>
        </Link>
        {/* </form>
        </InputGroup> */}
        <p>
          A simple application that allows you to search and watch youtube
          videos
        </p>
      </div>
    );
  }
}
