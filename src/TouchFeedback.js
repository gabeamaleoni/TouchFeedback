import React from "react";
import "./TouchFeedback.css";

class TouchFeedback extends React.Component {
  constructor() {
    super();
    this.state = { isFeedbackActive: false, clientX: 0, clientY: 0 };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleTouchStart, false);
    document.addEventListener("mousemove", this.handleTouchMove, false);
    document.addEventListener("mouseup", this.handleTouchEnd, false);
    document.addEventListener("touchstart", this.handleTouchStart, false);
    document.addEventListener("touchmove", this.handleTouchMove, false);
    document.addEventListener("touchend", this.handleTouchEnd, false);
  }

  componentWillUnmount() {
    document.remove("mousedown", null, false);
    document.remove("mousemove", null, false);
    document.remove("mouseup", null, false);
    document.remove("touchstart", null, false);
    document.remove("touchmove", null, false);
    document.remove("touchend", null, false);
  }

  handleTouchStart = e => {
    const clientX = e.touches ? e.touches[0].pageX : e.clientX;
    const clientY = e.touches ? e.touches[0].pageY : e.clientY;
    this.setState({
      isFeedbackActive: true,
      isEndingAnimation: false,
      clientX,
      clientY
    });
  };

  handleTouchMove = e => {
    const clientX = e.touches ? e.touches[0].pageX : e.clientX;
    const clientY = e.touches ? e.touches[0].pageY : e.clientY;
    if (this.state.isFeedbackActive) {
      this.setState({ clientX, clientY, isEndingAnimation: false });
    }
  };

  handleTouchEnd = () => {
    this.setState({ isFeedbackActive: false, isEndingAnimation: true }, () => {
      setTimeout(() => {
        this.setState({ isEndingAnimation: false });
      }, 300);
    });
  };

  render() {
    const {
      isFeedbackActive,
      isEndingAnimation,
      clientX,
      clientY
    } = this.state;
    return (
      <div
        style={{
          left: clientX - 30,
          top: clientY - 30,
          opacity: isFeedbackActive ? 1 : 0
        }}
        className={`touch-feedback ${isFeedbackActive ? `is-active` : ""} ${
          isEndingAnimation ? `is-ending` : ""
        }`}
      ></div>
    );
  }
}

export default TouchFeedback;
