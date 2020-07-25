import React, { Component } from "react";

// Importing CSS
import "./MenuNav.css";

// Import Image
import logo from "./img/logo.png";

// importing icons
import { FaHorseHead } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineUser, AiFillSetting } from "react-icons/ai";
import { RiFileChartLine } from "react-icons/ri";

/* Leaving as stateful or class components
  Initially this code is just UI component.
  Further it can be changed
*/
class MenuNav extends Component {
  render() {
    return (
      <div className="menu-nav">
        <div className="menu-nav-logo">
          <img className="menu-nav-logo-img" src={logo} alt="user" />
        </div>

        <ul className="menu-nav-icons">
          <li>
            <a href="#" title="Copy">
              <MdContentCopy size={24} />
            </a>
          </li>
          <li>
            <a href="#" title="Messages">
              <FiMessageSquare size={24} />
            </a>
          </li>
          <li>
            <a href="#" title="Group">
              <AiOutlineUser size={24} />
            </a>
          </li>
          <li>
            <a href="#" title="Chart">
              <RiFileChartLine size={24} />
            </a>
          </li>
          <li>
            <a href="#" title="Setting">
              <AiFillSetting size={24} />
            </a>
          </li>
        </ul>
        <div className="user-image">
          <img
            className="user-img-lg"
            src="https://picsum.photos/40/40"
            alt="user"
          />
        </div>
      </div>
    );
  }
}

export default MenuNav;
