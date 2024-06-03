import React from "react";
import "./Sidebar.css";
import game from "../assets/game.png";
import home from "../assets/home.png";
import car from "../assets/car.png";
import sport from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import technology from "../assets/technology.png";
import music from "../assets/music.png";
import news from "../assets/news.png";
import game1 from "../assets/game1.png";
import chennal from "../assets/chennal.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div>
      <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className="shortcut-link">
          <div
            className={`side-link ${category === 0 ? "active" : ""}`}
            onClick={() => setCategory(0)}
          >
            <img src={home} alt="" />
            <p>Home</p>
          </div>
          <div
            className={`side-link ${category === 20 ? "active" : ""}`}
            onClick={() => setCategory(20)}
          >
            <img src={game1} alt="" />
            <p>Game</p>
          </div>
          <div
            className={`side-link ${category === 2 ? "active" : ""}`}
            onClick={() => setCategory(2)}
          >
            <img src={car} alt="" />
            <p>Automobile</p>
          </div>
          <div
            className={`side-link ${category === 17 ? "active" : ""}`}
            onClick={() => setCategory(17)}
          >
            <img src={sport} alt="" />
            <p>Sport</p>
          </div>
          <div
            className={`side-link ${category === 24 ? "active" : ""}`}
            onClick={() => setCategory(24)}
          >
            <img src={entertainment} alt="" />
            <p>Entertainment</p>
          </div>
          <div
            className={`side-link ${category === 28 ? "active" : ""}`}
            onClick={() => setCategory(28)}
          >
            <img src={technology} alt="" />
            <p>Technology</p>
          </div>
          <div
            className={`side-link ${category === 10 ? "active" : ""}`}
            onClick={() => setCategory(10)}
          >
            <img src={music} alt="" />
            <p>Music</p>
          </div>
          <div
            className={`side-link ${category === 25 ? "active" : ""}`}
            onClick={() => setCategory(25)}
          >
            <img src={news} alt="" />
            <p>News</p>
          </div>
          <hr />
          <div />
          <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
              <img src={chennal} alt="" /> <p>TMT</p>
            </div>
            <div className="side-link">
              <img src={chennal} alt="" /> <p>Lapp bros</p>
            </div>
            <div className="side-link">
              <img src={chennal} alt="" /> <p>Fox soccer</p>
            </div>
            <div className="side-link">
              <img src={chennal} alt="" /> <p>Wnba</p>
            </div>
            <div className="side-link">
              <img src={chennal} alt="" /> <p>chennal name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
