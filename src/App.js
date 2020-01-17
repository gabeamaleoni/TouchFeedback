import React, { Component } from "react";
import TouchFeedback from "./TouchFeedback";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isFeedbackActive: false };
  }
  render() {
    const { isFeedbackActive } = this.state;
    return (
      <div>
        <TouchFeedback isFeedbackActive={isFeedbackActive}></TouchFeedback>
      </div>
    );
  }
}

export default App;
