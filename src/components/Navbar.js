import React from "react";
import { Link } from "react-router-dom";
import ComputerIcon from "../images/icons/computer.png";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <img className="icon" src={ComputerIcon} alt="computer" />
        </Link>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
