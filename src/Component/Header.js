import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./download.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon style={{cursor:"pointer"}} />
        <img className="header_logo" src={logo} alt="youtube" />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchOutlinedIcon className="header_inputButton"/>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AccountCircleIcon className="header_icon" />
      </div>

    </div>
  );
};

export default Header;
