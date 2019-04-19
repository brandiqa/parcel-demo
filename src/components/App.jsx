import React from "react";

import Menu from "./Menu";
import Jokes from "./Jokes";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="container">
        <Jokes />
      </div>
    </div>
  );
}
