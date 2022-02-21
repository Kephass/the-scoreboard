import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import { Consumer } from "./Context";

class Player extends PureComponent {
  // static, another way to define propTypes. no need to instantiate the class to access proTypes in a class component
  static propTypes = {
    index: PropTypes.number,
  };

  render() {
    const { index } = this.props;
    return (
      <Consumer>
        {({ actions, players }) => (
          <div className="player">
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              {players[index].name}
            </span>

            <Counter index={index} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;
