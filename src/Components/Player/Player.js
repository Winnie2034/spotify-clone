import React from "react";
import Sidebar from "./PlayerItems/Sidebar/Sidebar";
import "./Player.css";
import Body from "./PlayerItems/Body";
import Footer from "./PlayerItems/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
