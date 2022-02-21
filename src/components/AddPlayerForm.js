import React from "react";
import { Consumer } from "./Context";

const AddPlayerForm = () => {
  /*
  * Replaced with the createRef() method. Ref
  state = {
    value: "",
  };

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
*/

  const playerInput = React.createRef();

  return (
    <Consumer>
      {(context) => {
        const handleSubmit = (e) => {
          e.preventDefault();
          context.actions.addPlayer(playerInput.current.value);
          //reset input field to empty
          e.currentTarget.reset();
        };
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={playerInput}
              placeholder="Enter a player's name"
            />

            <input type="submit" value="Add Player" />
          </form>
        );
      }}
    </Consumer>
  );
};

export default AddPlayerForm;
