import React from "react";
import "./header.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Header() {
  return (
    <div>

      <header>
        <div className="header-content">
        <input
          type="text"
          placeholder="&nbsp;&nbsp;🔍     Search"
          className="custom-input"
        />
        <div>
            <NotificationsNoneOutlinedIcon
            //   style={{ verticalAlign: "middle" }}
            />
            &nbsp;
            <EmailOutlinedIcon /> &nbsp;
            <button className="add">Add Photo +</button>
          </div>
        </div>
      </header>
    </div>
  );
}
