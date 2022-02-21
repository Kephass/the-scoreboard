import React, { Component } from "react";
import { Provider } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Felix",
        score: 0,
        id: 1,
      },
      {
        name: "Sadi",
        score: 0,
        id: 2,
      },
      {
        name: "Liam",
        score: 0,
        id: 3,
      },
      {
        name: "Luna",
        score: 0,
        id: 4,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  //Player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
          },
        }}
      >
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              index={index}
              score={player.score}
              isHighScore={highScore === player.score}
            />
          ))}
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
