import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  // static, another way to define propTypes. no need to instantiate the class to access proTypes in a class component
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired, //isRequired to make sure that there is value given
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
  };

  render() {
    const { name, id, score, index, removePlayer, changeScore, isHighScore } =
      this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon isHighScore={this.props.isHighScore} />
          {name}
        </span>

        <Counter index={index} score={score} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
