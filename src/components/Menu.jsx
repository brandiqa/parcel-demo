import React from "react";

export default function Menu() {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <a href="#" className="pure-menu-heading pure-menu-link">
        DEMO
      </a>
      <ul className="pure-menu-list">
        <li className="pure-menu-item pure-menu-selected">
          <a href="#" className="pure-menu-link">
            Jokes
          </a>
        </li>
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">
            Advice
          </a>
        </li>
        <li className="pure-menu-item">
          <a href="#" className="pure-menu-link">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
