import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./Menu";
import Jokes from "./Jokes";
import Advice from "./Advice";
import About from "./About";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <Route path="/" exact component={Jokes} />
          <Route path="/advice/" component={Advice} />
          <Route path="/about/" component={About} />
        </div>
      </div>
    </Router>
  );
}
