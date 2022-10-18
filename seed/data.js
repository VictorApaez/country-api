import fetch from "node-fetch";
let urlTopMovies = `https://restcountries.com/v3.1/all`;

function fetchMovies() {
  fetch(urlTopMovies)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}
fetchMovies();
