import fetch from "node-fetch";
import db from "../db/connection.js";
import Country from "../models/Country.js";
let urlTopMovies = `https://restcountries.com/v3.1/all`;

function fetchMovies() {
  fetch(urlTopMovies)
    .then((res) => res.json())
    .then((res) => {
      let api = trimData(res);
      seedData(api);
    });
}
fetchMovies();

function trimData(api) {
  return api.map((country) => {
    let {
      name,
      capital,
      languages,
      maps,
      population,
      continents,
      flags,
      latlng,
    } = country;
    return {
      name: name.common,
      capital,
      languages,
      maps,
      population,
      continents,
      flags,
    };
  });
}

async function seedData(api) {
  try {
    await Country.deleteMany({});
    await Country.create(api);
    await db.close();
    console.log("seeded data");
  } catch (error) {
    console.log("Data.js Error: " + error);
  }
}
