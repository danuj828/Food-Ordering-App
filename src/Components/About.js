import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"first - class"} location={"New Delhi"} />
      </div>
    );
  }
}

export default About;
