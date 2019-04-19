import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <a href="#" className="pure-menu-heading pure-menu-link">
        DEMO
      </a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
          <Link to="/" className="pure-menu-link">
            Jokes
          </Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/advice" className="pure-menu-link">
            Advice
          </Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/about" className="pure-menu-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
