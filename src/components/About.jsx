import React from "react";
import img from "../assets/images/grado-sr325e.jpg";

export default function About() {
  return (
    <div className="pure-g">
      <div className="pure-u-1-1">
        <h1>About Page</h1>
        <img className="pure-img" src={img} width="600px" />
        <p>
          We chose a powder-coated aluminum housing for these headphones because
          the added mass means smoother transitions from the lowest frequency
          range to the highest. You might also enjoy the authentic 60‘s style,
          which goes perfectly with skinny ties and sullen glances. The genuine
          top-grain leather padded head-strap is Brylcreem resistant.
        </p>
        <p>
          The Top of the Range Prestige Series Headphone, the SR325e has a new
          driver and cable design. The added mass from the metal housing
          minimizes transient distortions. With the new 8 conductor cable design
          you will notice superb control and stability of the upper and lower
          range of the frequency spectrum, with both supporting Grado's world
          renowned midrange. The SR325e will produce a sound that is pure Grado,
          with warm harmonic colors, rich full bodied vocals, excellent
          dynamics, and an ultra-smooth top end.
        </p>
      </div>
    </div>
  );
}
