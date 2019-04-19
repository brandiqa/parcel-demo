import "purecss";
import "./assets/styles/main.scss";

// Fetch Random Joke Remotely
const getJoke = async () => {
  const resp = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: new Headers({
      Accept: "application/json"
    })
  });
  const body = await resp.json();
  return body.joke;
};

// Update Joke Text
const textJoke = document.getElementById("joke");
const setJokeText = async () => {
  const joke = await getJoke();
  textJoke.textContent = joke;
};

// On Page loads, call `setJokeText`
document.addEventListener("DOMContentLoaded", () => {
  setJokeText();
});

// On Button Click, all `setJokeText`
const btnHit = document.getElementById("btnHit");
btnHit.onclick = function() {
  setJokeText();
};
