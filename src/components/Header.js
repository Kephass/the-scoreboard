import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ players, title }) => {
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTtypes = {
  tile: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),
};

//Default value when not specified my Parent. Also performs typechecking on them
Header.defaultProps = {
  title: "Scoreboard",
};

export default Header;
