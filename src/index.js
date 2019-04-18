import "purecss";
import "./assets/styles/main.scss";

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

const textJoke = document.getElementById("joke");
const btnHit = document.getElementById("btnHit");
btnHit.onclick = async function() {
  const joke = await getJoke();
  textJoke.textContent = joke;
};
