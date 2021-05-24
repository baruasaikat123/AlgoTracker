import React, { useState } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as TableIcon } from "../../assets/table.svg";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import "./SideBarStyle.css";

function SideBar() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="sidebar__container">
      <div className="buttons__container">
        <NavLink to="/" exact>
          <div
            className="button1__container"
            onClick={() => setActiveTab(0)}
            style={{
              color: `${activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`,
            }}
          >
            <p>Home</p>
            <div className="button1">
              <HomeIcon
                style={{
                  width: "100%",
                  fill: `${
                    activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"
                  }`,
                }}
              />
            </div>
          </div>
        </NavLink>
        <NavLink to="/dash">
          <div
            className="button2__container"
            onClick={() => setActiveTab(1)}
            style={{
              color: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`,
            }}
          >
            <p>Dash</p>
            <div className="button2">
              <DashboardIcon
                style={{
                  width: "100%",
                  fill: `${
                    activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"
                  }`,
                }}
              />
            </div>
          </div>
        </NavLink>
        <NavLink to="/table">
          <div
            className="button3__container"
            onClick={() => setActiveTab(2)}
            style={{
              color: `${activeTab === 2 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`,
            }}
          >
            <p>Table</p>
            <div className="button3">
              <TableIcon
                style={{
                  width: "100%",
                  fill: `${
                    activeTab === 2 ? "#fff" : "rgba(255, 255, 255, 0.5)"
                  }`,
                }}
              />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
