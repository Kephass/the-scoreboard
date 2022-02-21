import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";
import { Consumer } from "./Context";

class Player extends PureComponent {
  // static, another way to define propTypes. no need to instantiate the class to access proTypes in a class component
  static propTypes = {
    name: PropTypes.string.isRequired, //isRequired to make sure that there is value given
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool,
  };

  render() {
    const { name, id, score, index, isHighScore } = this.props;
    return (
      <Consumer>
        {(context) => (
          <div className="player">
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => context.actions.removePlayer(id)}
              >
                ✖
              </button>
              <Icon isHighScore={isHighScore} />
              {name}
            </span>

            <Counter index={index} score={score} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;
