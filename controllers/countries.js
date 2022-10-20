import Country from "../models/Country.js";

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCountry = async (req, res) => {
  try {
    let nameInput = req.params.name;
    let country = await Country.find({ name: nameInput });
    res.json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getContinent = async (req, res) => {
  try {
    let continent = req.params.continent;
    let result = await Country.find({ continents: continent });
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
