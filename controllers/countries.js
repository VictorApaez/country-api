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
