import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="items-center hidden list-none md:flex font-avenir">
      <li className="px-2">
        <Link to="/resume">Resume</Link>
      </li>
      <li className="px-2 border-black border-x">
        <Link to="/projects">Projects</Link>
      </li>
      <li className="px-2">
        <Link to="/contacts">Contacts</Link>
      </li>
    </nav>
  );
};

export default Nav;
