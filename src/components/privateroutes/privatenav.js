import React from "react";
import { Link } from "react-router-dom";

const PrivateNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/private/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/private/profile">profile</Link>
        </li>
        <li>
          <Link to="/private/setting">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default PrivateNav;