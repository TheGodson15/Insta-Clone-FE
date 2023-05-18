import React from "react";
import "./sidenav.css";
import menulogo from "../../assets/logo.png";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { NavLink } from "react-router-dom";

export default function Sidenav() {
  return (
    <div>
      <div className="side-nav">
        <img src={menulogo} alt="" className="menulogo" />
        <div className="display-picture"></div>
        <div className="name-container">Rayan Adlardard</div>
        <div className="title-container">@RayanAdalard</div>
        <div className="info">
          <div className="post mini">
            <p>46</p>
            <p>Posts</p>
          </div>
          <div className="followers mini">
            <p>2.8k</p>
            <p>Followers</p>
          </div>
          <div className="following mini">
            <p>576</p>
            <p>Following</p>
          </div>
        </div>
        <div className="social-links">
          <ul className="social-ul">
          <NavLink
              className="navlink"
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              {" "}
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Feed</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/explore"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Explore</span>
              </li>
            </NavLink>

            <NavLink
              className="navlink"
              to="/notifications"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Notifications</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/messages"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Messages</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/direct"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Direct</span>
              </li>
            </NavLink>
            <NavLink
              className="navlink"
              to="/stats"
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "palevioletred" : "black",
                };
              }}
            >
              <li>
                <AppsOutlinedIcon />
                <span className="menu-item">Stats</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
