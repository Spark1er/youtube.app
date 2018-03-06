import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
} from "reactstrap";
import "./searchBar.css";
import { Link } from "react-router-dom";

// const searchBar = props => {
//   const termy = props.termy;
// };

export default class searchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.props.videoSearch(this.state.value);
  }

  handleSubmit(event) {
    this.props.videoSearch(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar className="navbar">
          <div className="container">
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/index">
              <NavbarBrand className="brand">YouTube.App</NavbarBrand>
            </Link>
            <Nav className="ml-auto" navbar>
              <div className="search">
                <NavItem>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend" />
                    <form className="inp" onSubmit={this.handleSubmit}>
                      <label>
                        <Input
                          autoFocus
                          type="text"
                          size="60"
                          placeholder="Enter the query"
                          value={this.state.value}
                          onChange={this.handleChange}
                        />
                      </label>
                      <Link to="/list">
                        <Button className="subut" type="submit">
                          Search
                        </Button>
                      </Link>
                    </form>
                  </InputGroup>
                </NavItem>
              </div>
            </Nav>
          </div>
        </Navbar>
      </div>
    );
  }
}
