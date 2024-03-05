import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema({
  title: String,
  runTime: String,
  theater: String,
  theaterAddress: String,
  openDate: String,
  closeDate: String,
  intermission: Boolean,
  isMusical: Boolean,
  buyTickets: String,
  officalSite: String
});

export default mongoose.model("shows", ShowSchema);
