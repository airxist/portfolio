import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="items-center hidden divide-x-2 md:flex">
      <Link to="/resume">Resume</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Nav;
