import mongoose from "mongoose";
const Schema = mongoose.Schema;

let countrySchema = new Schema({
  name: String,
  capital: [String],
  region: String,
  languages: Object,
  maps: {
    googleMaps: String,
    openStreetMaps: String,
  },
  population: Number,
  continents: [String],
  flags: {
    png: String,
    svg: String,
  },
  latlng: [],
});

export default mongoose.model("Country", countrySchema);
