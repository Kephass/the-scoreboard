import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ title }) => {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  );
};

// Default value when not specified by Parent. Also performs typechecking on them
// Header.defaultProps = {
//   title: "Scoreboard",
// };

export default Header;
