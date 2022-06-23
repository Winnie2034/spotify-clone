import React from "react";
import Sidebar from "./PlayerItems/Sidebar/Sidebar";
import "./Player.css";
import Body from "./PlayerItems/Body/Body";
import Footer from "./PlayerItems/Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
