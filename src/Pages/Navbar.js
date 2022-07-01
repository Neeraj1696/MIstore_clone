import { Link } from "react-router-dom";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img
            id="logoImage"
            src="https://i01.appmifile.com/webfile/globalimg/pandora/mi-logo.svg"
            alt="Error"
          />
        </Link>
      </div>
      <a className="navlinks" href="/#miphones">
        Mi Phones
      </a>
      <a className="navlinks" href="/#redmiphones">
        Redmi Phones
      </a>
      <a className="navlinks" href="/#tv">
        TV
      </a>
      <a className="navlinks" href="/#laptops">
        Laptops
      </a>
      <a className="navlinks" href="/#lifestyle">
        Fitness & Lifestyle
      </a>
      <a className="navlinks" href="/#home">
        Home
      </a>
      <a className="navlinks" href="/#audio">
        Radio
      </a>
      <a className="navlinks" href="/#accessories">
        Accessories
      </a>
      <div className="searchbox">
        <input type="text" name="search" placeholder="Search Products" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Navbar;
