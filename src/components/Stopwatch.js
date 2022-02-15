import React, { Component } from "react";
import PropTypes from "prop-types";

class Stopwatch extends Component {
  static propTypes = {
    tick: PropTypes.func,
    handleStopwatch: PropTypes.func,
    handleRest: PropTypes.func,
    elapsedTime: PropTypes.number,
    previousTime: PropTypes.number,
  };

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState((prevState) => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
      }));
    }
  };

  handleStopwatch = () => {
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleRest = () => {
    this.setState({
      elapsedTime: 0,
    });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopwatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleRest}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
