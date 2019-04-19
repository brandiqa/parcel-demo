import React, { useState, useEffect } from "react";

export default function Jokes() {
  const [joke, setJoke] = useState("Joke is loading....");

  const fetchJoke = async () => {
    const resp = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json"
      })
    });
    const body = await resp.json();
    setJoke(body.joke);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section>
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>Dad Jokes</h1>
          <h2 id="joke">{joke}</h2>
        </div>
      </div>
      <div className="pure-g">
        <div className="pure-u-1-1">
          <button
            id="btnHit"
            className="pure-button pure-button-primary"
            onClick={fetchJoke}
          >
            Hit Me!
          </button>
        </div>
      </div>
    </section>
  );
}
