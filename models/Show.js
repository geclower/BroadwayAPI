import mongoose from "mongoose";

const ShowSchema = new mongoose.Schema({
  title: String,
  runTime: Number,
  theater: String,
  theaterAddress: String,
  directedBy: Array,
  bookBy: Array,
  musicBy: { 
    type: Array,
    require: false},
  openDate: Date,
  isClosing: Boolean,
  closeDate: {
    type: Date,
    require: false},
  intermission: Boolean,
  isMusical: Boolean,
  buyTickets: String,
  officialSite: String,
  posterImage: String
});

export default mongoose.model("shows", ShowSchema);
