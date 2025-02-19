import React from "react";
import { Link } from "react-router";

const HotstarMovie = () => {
  return (
    <div>
      <h1>HotstarMovie</h1>
      <ul>
        <li>
          <Link to="/play/moneyheist">moneyheist</Link>
        </li>
        <li>
          <Link to="/play/gutarGoo">gutarGoo</Link>
        </li>
      </ul>
    </div>
  );
};

export default HotstarMovie;
