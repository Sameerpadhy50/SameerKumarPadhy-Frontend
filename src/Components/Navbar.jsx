import React from "react";

import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div >
      <div>
        <Link to="/">
          <h1>Navbar</h1>
        </Link>
      </div>
      <div >
        <ul>
          
          <Link to="/capsules">
            <li>Capsules</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
